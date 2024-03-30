import mongoose from "mongoose";

export function listen(): void {
  console.log(`App start at: http://localhost:${process.env.PORT || 5555}`);
}

export async function connect() {
  try {
    await mongoose.connect(`${process.env.URI}`, {
      dbName: "task_manager",
    });

    console.log("DB connected");
  } catch (error: any) {
    console.log(error.message);
  }
}
