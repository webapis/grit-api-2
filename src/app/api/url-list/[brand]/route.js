import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGODB_URL;

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
})

export async function GET(request, { params }) {
    try {
        debugger
        const brand = params.brand
      
        await client.connect();

        const gritDb = await client.db('gritDb')
        const urlCol = await gritDb.collection(brand)
        const data = await urlCol.find({}).toArray()
debugger
        return Response.json(data)

    } catch (error) {

        return new Response('error', { status: 500 })
    }

}