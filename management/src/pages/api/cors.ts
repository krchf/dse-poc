import { NextApiRequest, NextApiResponse } from "next"
import Cors from 'cors'

const cors = Cors({
    methods: ['GET', 'PUT', 'HEAD'],
})

export function handleCors(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    return new Promise((resolve, reject) => {
        cors(req, res, (result: any) => {
            if (result instanceof Error) {
                return reject(result)
            }

            return resolve(result)
        })
    })
}