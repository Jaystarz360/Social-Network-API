// Requirements
const router = require("express").Router();
const User = require("../../models/User");
const Thought = require("../../models/Thought");

// All thoughts
router.get("/", async (req, res) => {
  try {
    const thoughtdata = await Thought.find({
    }
  );
    console.log(thoughtdata);
    return res.status(200).json(thoughtdata);
  } catch (err) {
    return res.status(500).json(err);
  }
})
;

// Show one thought from ID
router.get("/:id", async (req, res) => {
  try {
    const thoughtdata = await Thought.findById(
      { _id: req.params.id }
    );
    return res.status(200).json(thoughtdata);
  } catch (err) {
    return res.status(500).json(err);
  }
}
);

// Add thought
router.post("/:id", async (req, res) => {
  try {
    const uname = await User.findById(
      { _id: req.params.id }
    );
    if (!uname) {
      return res.status(404).json(
        { message: "Error...No ID exits" }
      );
    }
    const thoughtdata = await Thought.create({
      thoughtText: req.body.text,
      userName: uname.username,
    }
  );
    const idToUser = await User.findByIdAndUpdate(
      { _id: req.params.id },
      { $addToSet: { thoughts: thoughtdata._id } },
    );
    return res.status(200).json(
      { message: "Updated" }
    );
  } catch (err) {
    return res.status(500).json(err);
  }
}
);

// Update thought
router.put("/:id", async (req, res) => {
  try {
    const thoughtdata = await Thought.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { thoughtText: req.body.text } 
    },
    );
    return res.status(200).json(
      { message: "Updated" }
    );
  } catch (err) {
    return res.status(500).json(err);
  }
}
);

// Delete a thought
router.delete("/:id", async (req, res) => {
  try {
    const thoughtdata = await Thought.findByIdAndDelete(
      { _id: req.params.id }
    );
    return res.status(200).json(
      { message: "Updated" }
    );
  } catch (err) {
    return res.status(200).json(err);
  }
});

// Add reaction
router.post("/:id/reactions", async (req, res) => {
  try {
    const reactiondata = await Thought.findByIdAndUpdate(
      { _id: req.params.id },
      { $addToSet: { reactions: req.body } },
    );
    console.log(`\x1b[35m` + reactiondata);

    return res.status(200).json(
      { message: "Updated" }
    );
  } catch (err) {
    return res.status(500).json(err);
  }
}
);
// Delete reaction
router.delete("/:id/reactions/:reactionId", async (req, res) => {
  try {
    const reactiondata = await Thought.findByIdAndUpdate(
      { _id: req.params.id },
      { $pull: { reactions: 
        { reactionId: req.params.reactionId }
       }
     },
    );
    return res.status(200).json(
      { message: "Reaction deleted" }
    );
  } catch (err) {
    return res.status(200).json(err);
  }
});

// Export
module.exports = router;
