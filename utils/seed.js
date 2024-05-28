// Requirements
const connection = require("../config/connection");
const User = require("../models/User");

// Connection
connection.once("open", async () => {
  let userCheck = await connection.db
    .listCollections({ name: "users" })
    .toArray();
  if (userCheck.length) {
    await connection.dropCollection("users");
  }

// Seed info of username and email already added
  const users = [
    {
      username: "lernantino",
      email: "lernantino@gmail.com",
    },
  ];
  
// Create table seed
  await User.collection
  .insertMany(users);

  console.table(users);
  console.log("Completed...");
  process.exit(0);
});
