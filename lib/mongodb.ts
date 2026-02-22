import { MongoClient, type Db } from "mongodb";

let clientPromise: Promise<MongoClient> | undefined;

export async function getDb(): Promise<Db> {
  const uri = process.env.MONGODB_URI;
  const dbName = process.env.MONGODB_DB_NAME;

  if (!uri) {
    throw new Error("Missing MONGODB_URI environment variable");
  }

  if (!dbName) {
    throw new Error("Missing MONGODB_DB_NAME environment variable");
  }

  if (!clientPromise) {
      const client = new MongoClient(uri);
      clientPromise = client.connect();
  }

  const client = await clientPromise;
  return client.db(dbName);
}
