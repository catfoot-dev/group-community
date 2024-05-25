import { PrismaClient } from 'db';

const prismaClientSigleton = () => new PrismaClient();

declare global {
  var prismaGlobal: undefined | ReturnType<typeof prismaClientSigleton>;
}

const prisma = globalThis.prismaGlobal ?? prismaClientSigleton();

export default prisma;

if (process.env.NODE_ENV !== 'production') {
  globalThis.prismaGlobal = prisma;
}
