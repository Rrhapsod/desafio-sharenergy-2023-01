import mongoose from "mongoose";

export const connectDatabase = () => {
  console.log("Connecting database...");

  mongoose
    .connect(
      "mongodb+srv://renanrondon:mongo123@clusterrenan.kq4ixmm.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => console.log("Database Connected!"))
    .catch((err) => console.log(err));
};
