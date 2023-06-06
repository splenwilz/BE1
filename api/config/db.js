const mongoose = require('mongoose');

const mongoDB_Url = process.env.MONGODB_URL;

const connectDB = async () => {
  try {
    await mongoose.connect(mongoDB_Url,{
      useNewUrlParser:true,
      useUnifiedTopology: true
    })

    console.log('MongoDB connected!!')
  } catch (err) {
    console.log('Failed to connect to MongoDB', err)
  }
  // finally {
  //       await client.close();
  //   }
}

connectDB()



// const { MongoClient } = require("mongodb");
 
// // Replace the following with your Atlas connection string                                                                                                                                        
// const url = "mongodb+srv://<username>:<password>@<clusterName>.mongodb.net/?retryWrites=true&w=majority";

// // Connect to your Atlas cluster
// const client = new MongoClient(url);

// async function run() {
//     try {
//         await client.connect();
//         console.log("Successfully connected to Atlas");

//     } catch (err) {
//         console.log(err.stack);
//     }
//     finally {
//         await client.close();
//     }
// }

// run().catch(console.dir);