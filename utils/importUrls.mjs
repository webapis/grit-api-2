//export urls from atlas mongodb database

import { createRequire } from "module";
const require = createRequire(import.meta.url);
require("dotenv").config();
const brandNames = require('../src/brandNames.json')
const fs =require('fs')
const path =require('path')
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
        debugger
        // Send a ping to confirm a successful connection
        //await client.db("admin").command({ ping: 1 });
        const gritDb = await client.db('gritDb')
        const data = {}
        debugger
        for (let brand of brandNames) {
            debugger

            const urlCol = await gritDb.collection(brand)
            const brandData = await urlCol.find().toArray();
            data[brand] = brandData
            debugger

        }
        fs.writeFileSync(path.join(`${process.cwd()}`, 'db.json'), JSON.stringify(data))

        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);