// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { ModelCollection } from "../../../../../shared/types/models"
// import { createMinioClient } from '@/util/minio';
import { BUCKET_NAME, createMinioClient, bucketItemToModel } from './minio';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ModelCollection>
) {
  try {
    const collection: ModelCollection = {};

    const minio = createMinioClient();
    const objects = minio.extensions.listObjectsV2WithMetadata(BUCKET_NAME);
    for await (const object of objects) {
      const [id, model] = bucketItemToModel(object)
      collection[id] = model;
    }

    res.json(collection)
  } catch (error) {
    console.error(error);
    res.status(501).send(error as any)
  }
}
