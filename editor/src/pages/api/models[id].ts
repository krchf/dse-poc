// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Model, ModelCollection } from '../../data';

const models: ModelCollection = {}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Model>
) {
  switch (req.method) {
    case "GET": {
      const id = req.query.id as string;
      if (id) {
        res.json(readAll());
      } else {
        res.json(readSingle(id));
      }
    }
  }
}

function readAll() {
  return JSON.stringify(models);
}

function readSingle(id: string) {
  return JSON.stringify(models[id]);
}