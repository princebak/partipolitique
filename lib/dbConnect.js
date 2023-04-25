import mongoose from "mongoose";

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("The MONGODB_URI dont exist in .env file");
}

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

    cashed.promise = mongoose.connect(uri, opts).then((mongoose) => {
      return mongoose;
    });
  }

  cashed.conn = await cashed.promise;
  return cashed.conn;
}

export default dbConnect;
