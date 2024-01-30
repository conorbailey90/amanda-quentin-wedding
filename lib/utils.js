import mongoose from 'mongoose';
const uri = process.env.MONGO;

const connection = {};

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };
async function connectToDb() {
  try {

    if(connection.isConnected){
        console.log('Using existing connection');
        return;
    }
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    const db = await mongoose.connect(uri, clientOptions);
    connection.isConnected = db.connections[0].readyState;
  } catch(err){
    console.log(err)
  } 
}

export default connectToDb;