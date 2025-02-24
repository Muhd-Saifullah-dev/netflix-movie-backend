const mongoose = require("mongoose");
const { MONGO_URI } = require("../configs/config");
const { DB_NAME } = require("../constant");
const path = require("path");
const fs = require("fs");

const connectionDatabase = async () => {
  try {
    const conn = await mongoose.connect(`${MONGO_URI}/${DB_NAME}`);
    console.log(`MongoDB Connected  ${conn.connection.host}`);

    const modelsPath = path.join(__dirname, "../model");
    fs.readFileSync(modelsPath).forEach((file) => {
      if (file !== "index.js") require(path.join(modelsPath, file));
    });
  } catch (error) {
    console.error(`error in connection :: ${error}`);
    process.exit(1);
  }
};

module.exports = {
  connectionDatabase,
};
