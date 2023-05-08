import mongoose, { connect } from "mongoose";

import { config } from "./config";

export default () => {
  const connect = () => {
    mongoose
      .connect(config.DATABASE_URL!)
      .then(() => {
        console.log("Successfully connected to Database");
      })
      .catch((error) => {
        console.log("An error occured while trying to connect to DB");
        return process.exit();
      });
  };

  connect();

  mongoose.connection.on("disconnected", connect);
};
