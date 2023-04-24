// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
import { supabase } from "../supabase-client"

import {
  Composition,
  CompositionCollection,
} from "../../../../../shared/types/composition"

// TODO error handling

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CompositionCollection>
) {
  switch (req.method) {
    case "GET":
      res.status(200).send(await readAll())
      break
    case "POST":
      create(req.body)
      res.status(200).end()
      break
    default:
      res.status(400).end("Unsupported method!")
  }
}

async function readAll(): Promise<CompositionCollection> {
  const { data, error } = await supabase.from("compositions").select("*")
  return data as CompositionCollection
}

async function create(composition: Composition) {
  const { data, error } = await supabase
    .from("compositions")
    .insert(composition)
  return
}
