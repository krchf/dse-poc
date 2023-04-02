// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { Client } from "minio"

import { Model, ModelCollection } from "../../../../../shared/types/models"

const BUCKET_NAME = "models";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Model>
) {
  try {

    // TODO externalize minio config
    const minio = new Client({
      endPoint: "localhost",
      port: 9000,
      useSSL: false,
      accessKey: "minioadmin",
      secretKey: "minioadmin"
    });

    const { id } = req.query

    switch (req.method) {
      case "GET": {
        const model = await read(minio, id as string);
        res.json(model)
        break
      }
      case "PUT": {
        const model = req.body;
        await write(minio, id as string, model)
        res.end()
        break
      }
    }
  } catch (error) {
    console.error(error);
    res.status(501).send(error as any)
  }
}

async function write(minio: Client, id: string, model: Model): Promise<void> {
  const { xml, ...modelData } = model;
  const metadata = {
    'Content-Type': 'application/xml',
    id,
    ...modelData,
  }

  const bucketExists = await minio.bucketExists(BUCKET_NAME)
  if (!bucketExists)
    await minio.makeBucket(BUCKET_NAME);

  await minio.putObject(BUCKET_NAME, id + ".xml", model.xml, metadata);
}

async function read(minio: Client, id: string) {
  // TODO parallelize calls
  const metadata = await minio.statObject(BUCKET_NAME, id);
  const stream = await minio.getObject(BUCKET_NAME, id + ".xml")

  // transform stream to string
  const chunks = [];
  for await (const chunk of stream) {
    chunks.push(Buffer.from(chunk));
  }
  const xml = Buffer.concat(chunks).toString("utf-8")

  // transform metadata to model
  const model = metadata.metaData;
  delete model["content-type"];
  delete model["id"];

  return {
    ...model,
    xml
  }
}