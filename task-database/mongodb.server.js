const {MongoClient} = require("mongodb")


// Server path
const url = 'mongodb+srv://milane:admin1991@stu-org-data.60hamj4.mongodb.net/?retryWrites=true&w=majority';

const client = new MongoClient(url);

// testing mongodb connection;

async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db("stu-org-data")
    const TASKS = db.collection('task-data');
    console.log( await TASKS.find({}).toArray());
    await TASKS.insertOne({title: "first task ever", category: "testing"})
    console.log( await TASKS.find({}).toArray());
    return 'connection is done.';
}


main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());