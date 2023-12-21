const User = require("../models/user");

async function handleGetAllUser(req, res) {
  const result = await User.find();
  return res.json(result);
}
const handleCreateUser = async (req, res) => {
  const body = { ...req.body };
  const result = await User.create({
    ...body,
  });
  console.log(result);
  return res.status(201).json({ status: "succes", id: result._id });
};

const handleGetUserById = async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
};

const handleUpdateUserById = async (req, res) => {
  try {
    const _id = req.params.id;
    const newUserData = req.body;

    const user = await User.findByIdAndUpdate(
      { _id },
      { $set: { ...newUserData } },
      { new: true }
    );
    res.json(user);
  } catch (err) {
    console.log(err);
  }
};

const handleUDeleteUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findByIdAndDelete({ _id: id });
    res.json(user);
  } catch (err) {
    console.log(err);
  }
};
module.exports = {
  handleGetAllUser,
  handleCreateUser,
  handleGetUserById,
  handleUpdateUserById,
  handleUDeleteUserById,
};
