import { BucketItemWithMetadata, Client } from "minio";
import { Model } from "../../../../../shared/types/models";

export function createMinioClient() {
    // TODO externalize minio config
    return new Client({
        endPoint: "localhost",
        port: 9000,
        useSSL: false,
        accessKey: "minioadmin",
        secretKey: "minioadmin"
    });
}

export const BUCKET_NAME = "models"

export function bucketItemToModel(object: BucketItemWithMetadata): [string, Model] {
    const metadata = (object.metadata as any);

    return [
        metadata["X-Amz-Meta-Id"],
        {
            name: metadata["X-Amz-Meta-Name"],
            description: metadata["X-Amz-Meta-Description"],
            xml: ""
        }
    ]
}