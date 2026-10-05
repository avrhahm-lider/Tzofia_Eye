import{MongoClient}from 'mongodb'
import dns from 'dns'
import dotenv from "dotenv/config"
dns.setServers(["1.1.1.1", '8.8.8.8'])

const client = new MongoClient(process.env.MONGO_URI)

try {
    await client.connect()
    console.log("mongodb connected");
} catch (e) {
    console.log("mongodb faild to connect");
    process.exit(1)
}

export const db = client.db("Tzofia_Eye")