import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

let client;
let clientPromise;

if (!uri) {
  throw new Error("The MONGODB_URI dont exist in .env file");
}

if (process.env.MODE_ENV === "development") {
  // In development we use the global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production modem it's best to not use a global variable.
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
