require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = () => {
  if(mongoose.connections[0].readyState){
      console.log("Already connected.")
      return;
  }
  mongoose.connect("mongodb+srv://food:food@cluster0.6a8j1.mongodb.net/sushi?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true
  }, err => {
      if(err) throw err;
      console.log("Connected to mongodb.")
  })
}


export default connectDB
