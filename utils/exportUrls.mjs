//export urls to mongodb atlas database

import { createRequire } from "module";
const require = createRequire(import.meta.url);
require("dotenv").config();
const data = require('../db.json')
debugger
const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = process.env.MONGODB_URL;

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
}
);
async function run() {
    try {
        // Connect the client to the server (optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        //await client.db("admin").command({ ping: 1 });
        const gritDb = await client.db('gritDb')
debugger
        for (let colName in data) {
            debugger
            const brandData =data[colName]
            const urlCol = await gritDb.collection(colName)
            const insertManyresult = await urlCol.insertMany(brandData);
            debugger
        }


        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);