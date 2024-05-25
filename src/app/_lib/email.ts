import Imap from 'node-imap';
import { simpleParser } from 'mailparser';

const EMAIL_SERVERS = {} as {
  [host: string]: {
    imap: { host: string; port: number; ssl: boolean };
    smtp: { host: string; port: number; ssl: boolean };
  };
};

(() => {
  let i = 0;
  do {
    const emailHost = process.env[`EMAIL_HOST_${i}`] || '';
    if (!emailHost) {
      break;
    }
    const imapHost = process.env[`EMAIL_IMAP_${i}`] || '';
    const imapPort = Number(process.env[`EMAIL_IMAP_PORT_${i}`] || 143);
    const imapSSL = (process.env[`EMAIL_IMAP_SSL_${i}`] || '').toLowerCase() === 'true';
    const smtpHost = process.env[`EMAIL_SMTP_${i}`] || '';
    const smtpPort = Number(process.env[`EMAIL_SMTP_PORT_${i}`] || 25);
    const smtpSSL = (process.env[`EMAIL_SMTP_SSL_${i}`] || '').toLowerCase() === 'true';
    EMAIL_SERVERS[emailHost] = {
      imap: {
        host: imapHost,
        port: imapPort,
        ssl: imapSSL,
      },
      smtp: {
        host: smtpHost,
        port: smtpPort,
        ssl: smtpSSL,
      },
    }
    i++;
  } while (true)
})();

export async function checkHost(host: string): Promise<boolean> {
  return new Promise((resolve) => {
    if (EMAIL_SERVERS[host]) resolve(true);
    else resolve(false);
  });
}

export async function checkEmailAccess(
  host: string, email: string, password: string
): Promise<boolean> {
  const imap = new Imap({
    user: email,
    password: password,
    host: EMAIL_SERVERS[host].imap.host,
    port: EMAIL_SERVERS[host].imap.port,
    tls: EMAIL_SERVERS[host].imap.ssl,
  });
  return await new Promise((resolve, reject) => {
    imap.once('ready', () => {
      imap.end();
      resolve(true);
    });
    imap.once('error', (err: any) => {
      reject(err);
    });
    imap.connect();
  }).finally(() => imap.end()) as Promise<boolean>;
}

export async function openBoxImap(
  host: string,
  email: string,
  password: string,
  options: {
    mailboxName: string;
    begin: number | undefined;
    end: number | undefined;
    html: boolean | undefined;
  },
) {
  const imap = new Imap({
    user: email,
    password: password,
    host: EMAIL_SERVERS[host].imap.host,
    port: EMAIL_SERVERS[host].imap.port,
    tls: EMAIL_SERVERS[host].imap.ssl,
  });
  return await new Promise((resolve, reject) => {
    imap.once('ready', async () => {
      const unseen = await new Promise((_resolve, _reject) => {
        imap.status(options.mailboxName, (err, box) => {
          if (err) return _reject(err);
          _resolve(box.messages.unseen);
        });
      });

      const { resources: { storage } }: any = await new Promise((_resolve, _reject) => {
        (imap as any).getQuota('', (err: Error, quota: any) => {
          if (err) return _reject(err);
          // quota = { root: '', resources: { storage: { usage: 0, limit: 512000 } } }
          _resolve(quota);
        });
      });

      const data: any = await new Promise((_resolve, _reject) => {
        imap.openBox(options.mailboxName, true, (err, box) => {
          if (err) return _reject(err);

          const begin = Math.max(1, Math.min(box.messages.total, options.begin ?? box.messages.total));
          const end = Math.max(1, Math.min(begin, options.end ?? begin - 9));
          const f = imap.seq.fetch(`${begin}:${end}`, {
            markSeen: false,
            bodies: options.html ? '' : 'HEADER.FIELDS (FROM TO CC SUBJECT DATE)',
            struct: true,
          });
          const mails: any[] = [];
          f.on('message', (msg) => {
            const mail: any = {};
            msg.on('body', (stream) => {
              const buffers: Buffer[] = [];
              stream.on('data', (buffer) => {
                buffers.push(buffer);
              });
              stream.once('error', (err) => {
                _reject(err);
              });
              stream.once('end', () => {
                mail.message = Buffer.concat(buffers).toString('utf8');
              });
            });
            msg.once('attributes', (attrs) => {
              mail.attributes = attrs;
            });
            mails.push(mail);
          });
          f.once('error', (err) => {
            console.error(err);
            _reject(err);
          });
          f.once('end', async () => {
            const list: any[] = [];
            for (const { attributes, message } of mails) {
              const { from, to, cc, subject, date, html, text } = await simpleParser(message);
              const mail: any = {};
              mail.attributes = attributes;
              mail.headers = { from, to, cc, subject, date };
              if (options.html) {
                mail.html = html;
              } else {
                mail.summary = text?.substring(0, 140);
              }
              list.push(mail);
            }
            _resolve({
              storage,
              new: box.messages.new,
              total: box.messages.total,
              list,
            });
          });
        });
      });
      resolve({
        unseen,
        ...data,
      });
    });
    imap.once('error', (err: any) => {
      reject(err);
    });
    imap.connect();
  }).finally(() => imap.end());
}

export async function openBoxSearchImap(
  host: string,
  email: string,
  password: string,
  options: {
    mailboxName: string;
    begin: number | undefined;
    end: number | undefined;
  },
) {
  const imap = new Imap({
    user: email,
    password: password,
    host: EMAIL_SERVERS[host].imap.host,
    port: EMAIL_SERVERS[host].imap.port,
    tls: EMAIL_SERVERS[host].imap.ssl,
  });
  return await new Promise((resolve, reject) => {
    imap.once('ready', async () => {
      const data: any = await new Promise((_resolve, _reject) => {
        imap.openBox(options.mailboxName, true, (err, box) => {
          if (err) return _reject(err);

          const begin = Math.max(1, Math.min(box.messages.total, options.begin ?? box.messages.total));
          const end = Math.max(1, Math.min(begin, options.end ?? begin - 9));
          const f = imap.seq.fetch(`${begin}:${end}`, {
            bodies: '',
            struct: true,
          });
          const mails: any[] = [];
          f.on('message', (msg) => {
            const mail: any = {};
            msg.on('body', (stream) => {
              const buffers: Buffer[] = [];
              stream.on('data', (buffer) => {
                buffers.push(buffer);
              });
              stream.once('error', (err) => {
                _reject(err);
              });
              stream.once('end', () => {
                mail.message = Buffer.concat(buffers).toString('utf8');
              });
            });
            msg.once('attributes', (attrs) => {
              mail.attributes = attrs;
            });
            mails.push(mail);
          });
          f.once('error', (err) => {
            console.error(err);
            _reject(err);
          });
          f.once('end', async () => {
            const list: any[] = [];
            for (const { attributes, message } of mails) {
              const { from, to, cc, subject, date, html, text } = await simpleParser(message);
              const mail: any = {};
              mail.attributes = attributes;
              mail.headers = { from, to, cc, subject, date, html };
              mail.summary = text?.substring(0, 140);
              list.push(mail);
            }
            _resolve({
              list,
            });
          });
        });
      });
      resolve(data);
    });
    imap.once('error', (err: any) => {
      reject(err);
    });
    imap.connect();
  }).finally(() => imap.end());
}
