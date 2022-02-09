const mongoose = require("mongoose");
const config = require("config");

const connectToDatabase = async () => {
  try {
    await mongoose.connect(config.get("mongoURI"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true, //za primarne kljuceve
    });
    console.log("MongoDb is connected...");
  } catch (error) {
    console.error(error);
    process.exit(1);//1 zaustavlja aplikaciju
  }
};

module.exports = connectToDatabase;
