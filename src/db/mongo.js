import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI;

let client;
let db;

export async function connectMongo() {
  if (db) return db;

  client = new MongoClient(uri);
  await client.connect();

  db = client.db("veldrix");

  console.log("✅ MongoDB connected (veldrix)");

  return db;
}
