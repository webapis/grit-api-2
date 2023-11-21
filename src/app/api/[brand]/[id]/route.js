import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGODB_URL;

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
})

export async function PUT(request, { params }) {
    try {
        debugger
        const brand = params.brand
        const _id = params.id

        debugger
        const data = await request.json()
        debugger
        await client.connect();

        const gritDb = await client.db('gritDb')
        const urlCol = await gritDb.collection(brand)
        const updated = await urlCol.updateOne({ _id }, { $set: data })

        return new Response('updated', { status: 201 })
    } catch (error) {
        return new Response('error', { status: 500 })
    }

}