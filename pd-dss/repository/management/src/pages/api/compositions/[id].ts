// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"

import { Composition } from "../../../types/composition"
import { supabase } from "../supabase-client"

// TODO error handling

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Composition | null>
) {
  const { id } = req.query

  switch (req.method) {
    case "GET":
      res
        // .setHeader("Content-Type", "application/json")
        .status(200)
        .send(await readSingle(id as string))
      break
    case "PUT":
      res.status(200).send(await update(req.body))
      break
  }
}

async function readSingle(id: string): Promise<Composition | null> {
  const { data, error } = await supabase
    .from("compositions")
    .select("*")
    .eq("id", id)

  if (data) {
    return data[0] as Composition
  } else {
    return null
  }
}

async function update(composition: Composition) {
  const { data, error } = await supabase
    .from("compositions")
    .update(composition)
    .eq("id", composition.id)

  return null
}
