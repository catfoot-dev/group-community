'use server'

import crypto from 'crypto';

export async function encrypt(key: string, text: string): Promise<string> {
  return new Promise((resolve) => {
    const iv = key.substring(16, 32).split('').reverse().join('');
    const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    resolve(encrypted);
  });
}

export async function decrypt(key: string, encrypted: string): Promise<string> {
  return new Promise((resolve) => {
    const iv = key.substring(16, 32).split('').reverse().join('');
    const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    resolve(decrypted);
  });
}