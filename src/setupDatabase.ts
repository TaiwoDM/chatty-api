import mongoose, { connect } from "mongoose";

export default () => {
  const connect = () => {
    mongoose
      .connect("mongodb://localhost:27017/chattyapp-db")
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
