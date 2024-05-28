// Requirements
const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

// User
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: function (value) {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        },
        message: "Did not work...",
      },
    },

// Array of ID values referencing the Thought model
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "thought",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "user",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  },
);

// Array of ID values referencing the User model (self-reference)
// Total count of friends
userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

// Create the Users model using the Users Schema
const User = model("user", userSchema);

// Export
module.exports = User;
