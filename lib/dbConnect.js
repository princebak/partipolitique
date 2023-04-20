import mongoose from "mongoose";

if (!process.env.MONGODB_URI) {
  throw new Error("The MONGODB_URI dont exist in .env file");
}

const MONGODB_URI = process.env.MONGODB_URI;

let cashed = global.mongoose;

if (!cashed) {
  cashed = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cashed.conn) {
    return cashed.conn;
  }

  if (!cashed.promise) {
    const opts = {
      bufferCommands: false,
    };

    cashed.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose;
    });
  }

  cashed.conn = await cashed.promise;
  return cashed.conn;
}

export default dbConnect;
