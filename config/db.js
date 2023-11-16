
const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(process.env.MONGO_URL, ()=>
    console.log("Connected to Mongo Successfully!") 
    );
  }
    catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;



