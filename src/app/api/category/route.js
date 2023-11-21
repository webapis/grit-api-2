import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGODB_URL;

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
})



export async function POST(request, { params }) {
    try {
      
        const colName = params.colName

        const data = await request.json()
        debugger
        await client.connect();

        const gritDb = await client.db('gritDb')
        const urlCol = await gritDb.collection(colName)
        const updated = await urlCol.insertOne(data)

        return new Response('updated', { status: 200 })
    } catch (error) {
        return new Response('error', { status: 500 })
    }

}

export async function PUT(request, { params }) {
    try {
        debugger
        const colName = params.colName
        const _id = params.id

        debugger
        const data = await request.json()
        debugger
        await client.connect();

        const gritDb = await client.db('gritDb')
        const urlCol = await gritDb.collection(colName)
        const updated = await urlCol.updateOne({ _id }, { $set: data })

        return new Response('updated', { status: 201 })
    } catch (error) {
        return new Response('error', { status: 500 })
    }

}
export async function GET(request, { params }) {
    try {
       
        const colName = params.colName
      
        await client.connect();

        const gritDb = await client.db('gritDb')
        const urlCol = await gritDb.collection(colName)
        const data = await urlCol.find({}).toArray()

        return Response.json(data)

    } catch (error) {

        return new Response('error', { status: 500 })
    }

}