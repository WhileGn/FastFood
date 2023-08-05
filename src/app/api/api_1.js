"use server";

import { MongoClient } from "mongodb";

export default async function mongo_API() {
  try {
    const MainFechData = new MongoClient(
      "mongodb+srv://readOnly__user:lwQNKAa4iWFLraFf@cluster0.bjgbrt5.mongodb.net/MainFastFoodData?retryWrites=true&w=majority"
    );
    const MainData = await MainFechData.db()
      .collection("FastFoodData")
      .find()
      .toArray();
    console.log(MainData);

    return JSON.stringify(MainData);
  } catch {
    return "error";
  }
}

// mongo_API();
