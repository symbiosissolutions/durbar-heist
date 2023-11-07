// pages/api/user/[id].js
import prisma from '../../../lib/prisma'

export default async function handle(req, res) {
    const { id } = req.query

    if (req.method === 'PUT') {
        const user = await prisma.user.update({
            where: { id: Number(id) },
            data: {
                ...req.body,
            },
        })
        res.json(user)
    } else if (req.method === 'DELETE') {
        const user = await prisma.user.delete({
            where: { id: Number(id) },
        })
        res.json(user)
    } else {
        res.status(405).json({ message: 'Method Not Allowed' })
    }
}