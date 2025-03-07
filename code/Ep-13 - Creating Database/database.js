const { MongoClient } = require("mongodb");

const mongoDB =
  "mongodb+srv://ktalhaayub:5AFewesMUflk9o5i@cluster0.renn3.mongodb.net/";
const client = new MongoClient(mongoDB);

const dbName = "Info";

async function main() {
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("User");

  const user = {
    name: "John Doe",
    age: 30,
    city: "New York",
  };
  const user2 = {
    name: "Jane",
    age: 28,
    city: "Los Angeles",
  };
  //   const insertResult = await collection.insertMany([user, user2]);
  //   console.log("Inserted documents =>", insertResult);

  //   const updateResult = await collection.updateOne(user, {
  //     $set: { firstName: "Khan", lastName: "Hello" },
  //   });
  //   console.log("Updated documents =>", updateResult);

  //   const findResult = await collection.find({}).toArray();
  //   console.log("Found documents =>", findResult);

  const deleteResult = await collection.deleteMany(user);
  console.log("Deleted documents =>", deleteResult);

  const findResult = await collection.find({}).toArray();
  console.log("Found documents =>", findResult);

  return "done";
}

main()
  .then(() => {
    console.log("MongoDB connection closed");
  })
  .catch(() => {
    console.log("Failed to connect to MongoDB server");
  })
  .finally(() => {
    client.close();
  });
