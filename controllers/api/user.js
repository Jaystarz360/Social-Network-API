// Requirements
const router = require("express").Router();
const User = require("../../models/User");

// All users
router.get("/", async (req, res) => {
  try {
    const userdata = await User.find({});

    console.log(userdata);
    return res.status(200).json(userdata);
  } catch (err) {
    return res.status(500).json(err);
  }
}
);

// Show one user from ID
router.get("/:id", async (req, res) => {
  try {
    const userdata = await User.findOne(
      { _id: req.params.id }
    )
      .select("-__v")
      .populate("thoughts")
      .populate("friends");
    if (!userdata) {
      return res.status(404).json(
        { message: "Error...No ID exits" }
      );
    }
    console.log(userdata);
    return res.status(200).json(userdata);
  } catch (err) {
    return res.status(500).json(err);
  }
}
);

// Add a new user
router.post("/", async (req, res) => {
  try {
    const userdata = await User.create(
      { username: req.body.username, 
      email: req.body.email }
  );
    console.log(userdata);
    return res.status(200).json(
      { message: "Updated" }
    );
  } catch (err) {
    return res.status(500).json(err);
  }
}
);

// Update a user by ID
router.put("/:id", async (req, res) => {
  try {
    const userdata = await User.findByIdAndUpdate({ _id: req.params.id }, { $set: req.body },
    );
    console.log(userdata);
    return res.json(
      { message: "Updated" }
    );
  } catch (err) {
    return res.status(500).json(err);
  }
}
);

// Delete a user by ID
router.delete("/:id", async (req, res) => {
  try {
    const userdata = await User.findByIdAndDelete({ _id: req.params.id });
    if (!userdata) {
      return res.status(404).json(
        { message: "Error...No ID exits" }
      );
    }
    return res.status(200).json(
      { message: "Updated" }
    );
  } catch (err) {
    return res.status(500).json(err);
  }
}
);

// Add a friend
router.post("/:id/friends/:friendId", async (req, res) => {
  try {
    const addFriend = await User.findByIdAndUpdate(
      { _id: req.params.id },
      { $addToSet: { friends: req.params.friendId } },
    );
    if (!addFriend) {
      return res.status(404).json(
        { message: "Error...No ID exits" }
      );
    }
    console.log(addFriend);
    return res.status(200).json(
      { message: "Updated" }
    );
  } catch (err) {
    return res.status(500).json(err);
  }
}
);

// Delete a friend
router.delete("/:id/friends/:friendId", async (req, res) => {
  try {
    const deleteFriend = await User.findByIdAndUpdate(
      { _id: req.params.id },
      { $pull: { friends: req.params.friendId } },
    );
    console.log(deleteFriend);
    if (!deleteFriend) {
      return res.status(404).json(
        { message: "Error...No ID exits" }
      );
    }
    return res.status(200).json(
      { message: "Friend removed from user" }
    );
  } catch (err) {
    return res.status(500).json(err);
  }
});

// Export
module.exports = router;
