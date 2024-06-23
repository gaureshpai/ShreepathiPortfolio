const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://paigauresh:shreepathishree7@cluster0.7blkaad.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();
        const database = client.db('info');

        // listing all the collections in the database
        const collections = await database.listCollections().toArray();

        // fetch its documents
        for (let collection of collections) {
            const collectionName = collection.name;
            console.log(`Documents in collection '${collectionName}':`);

            // all documents
            const currentCollection = database.collection(collectionName);
            const cursor = currentCollection.find({});
            const documents = await cursor.toArray();

            console.log(documents);
        }
    } finally {
        await client.close();
    }
}

run().catch(console.error);
