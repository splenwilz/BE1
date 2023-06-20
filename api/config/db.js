const mongoose = require('mongoose');

const mongoDB_Url = process.env.MONGODB_URL;

const connectDB = async () => {
  try {
    await mongoose.connect(mongoDB_Url,{
      useUnifiedTopology: true,
      useNewUrlParser: true,
      autoIndex: true,
  })

    console.log('MongoDB connected!!')
  } catch (err) {
    console.log('Failed to connect to MongoDB', err)
  } 
}

connectDB()

