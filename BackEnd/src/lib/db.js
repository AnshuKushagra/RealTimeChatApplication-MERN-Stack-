import mongoose from "mongoose";
export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://anshukushagra8:BIPRyH42F670dYsv@cluster0.5hc4o.mongodb.net/chat_db?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("MongoDB Connected:{conn.connection.host}");
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};
