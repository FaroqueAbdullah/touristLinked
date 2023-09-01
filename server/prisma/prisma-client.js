"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient({
    log: [
        { level: 'warn', emit: 'event' },
        { level: 'info', emit: 'event' },
        { level: 'error', emit: 'event' },
    ],
});
prisma.$on('warn', (e) => {
    console.log(e);
});
prisma.$on('info', (e) => {
    console.log(e);
});
prisma.$on('error', (e) => {
    console.log(e);
});
exports.default = prisma;
