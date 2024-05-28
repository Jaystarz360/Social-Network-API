// Requirements
const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction");

// Thought Schema
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      minLength: 1,
      maxLength: 280,
      required: true,
    },
// Set default value to the current timestamp
// Use a getter method to format the timestamp on query
    createdAt: {
      type: Date,
      default: Date.now,
    },
    userName: {
      type: String,
      required: true,
    },
// Use ReactionsSchema to validate data
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  },
);


// Array of nested documents created with the reactionSchema
// get total count of reactions
thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});
thoughtSchema.virtual("formatDate").get(function () {
  return this.createdAt.toString();
});

// Create the Thoughts model using the Thoughts Schema
const Thought = model("thought", thoughtSchema);

// Export
module.exports = Thought;
