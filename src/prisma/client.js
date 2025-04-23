// src/prisma.js
const { PrismaClient } = require('../../generated/prisma/index');
const prisma = new PrismaClient();

process.on('SIGINT', async () => {
  await prisma.$disconnect();
  process.exit();
});

process.on('SIGTERM', async () => {
  await prisma.$disconnect();
  process.exit();
});

module.exports = prisma;
