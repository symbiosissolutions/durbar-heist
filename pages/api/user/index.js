// pages/api/user/index.js
import prisma from '../../../lib/prisma'

export default async function handle(req, res) {
    if (req.method === 'POST') {
        const result = await prisma.user.create({
            data: {
                ...req.body,
            },
        })
        res.json(result)
    } else if (req.method === 'GET') {
        const users = await prisma.user.findMany()
        res.json(users)
    } else {
        res.status(405).json({ message: 'Method Not Allowed' })
    }
}