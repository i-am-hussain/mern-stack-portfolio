import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

type MongooseCache = {
  connection: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
};

const globalWithMongoose = globalThis as typeof globalThis & {
  _mongooseCache?: MongooseCache;
};

const cache: MongooseCache = globalWithMongoose._mongooseCache ?? {
  connection: null,
  promise: null,
};

globalWithMongoose._mongooseCache = cache;

export async function connectToDatabase() {
  if (!MONGODB_URI) {
    throw new Error(
      "MONGODB_URI is not set. Add it to .env.local (see .env.example).",
    );
  }

  if (cache.connection) {
    return cache.connection;
  }

  if (!cache.promise) {
    cache.promise = mongoose.connect(MONGODB_URI, {
      dbName: process.env.MONGODB_DB || undefined,
      bufferCommands: false,
      serverSelectionTimeoutMS: 8000,
    });
  }

  try {
    cache.connection = await cache.promise;
  } catch (error) {
    cache.promise = null;
    throw error;
  }

  return cache.connection;
}
