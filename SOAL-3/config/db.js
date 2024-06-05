import monggose from "mongoose";

const ConnectDB = async () => {
  try {
    const conn = await monggose.connect(process.env.MONGO_URL);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default ConnectDB;
