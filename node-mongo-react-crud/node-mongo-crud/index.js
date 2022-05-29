const express = require('express');
const app = express();
const { MongoClient, ServerApiVersion } = require('mongodb');
const ObjectId = require('mongodb').ObjectId;
const port = process.env.PORT || 5000;
const cors = require('cors');

app.use(cors());
app.use(express.json());


//user: dbuser1
//password: JdMKde13Y8AKmX1R





const uri = "mongodb+srv://dbuser1:JdMKde13Y8AKmX1R@cluster0.ybnq3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        await client.connect();
        console.log("DB Connected");


        app.get('/user', async (req, res) => {
            const query = {};
            const cursor = usersCollection.find(query);
            const users = await cursor.toArray();
            res.send(users);
        })

        const usersCollection = client.db("foodExpress").collection("user");
        app.post('/user', async (req, res) => {
            const newUser = req.body;
            console.log("Adding new user", newUser);
            const result = await usersCollection.insertOne(newUser);
            res.send(result)
        })


        app.delete('/user/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const result = await usersCollection.deleteOne(query);
            res.send(result);
        })

        app.get('/user/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) }
            const result = await usersCollection.findOne(query)
            res.send(result);
        })

        app.put('/user/:id', async (req, res) => {
            const id = req.params.id;
            const updatedUser = req.body;
            const filter = { _id: ObjectId(id) }
            const options = { upsert: true }
            const updatedDoc = {
                $set: {
                    name: updatedUser.name,
                    email: updatedUser.email
                }
            }

            const result = await usersCollection.updateOne(filter, updatedDoc, options)
            res.send(result);

        })

    }
    finally {
        // await client.close();
    }

}

run().catch(console.dir);





app.get('/', (req, res) => {
    res.send("Running My Node Server");
});


app.listen(port, () => {
    console.log("CRUD Server is Running");
});