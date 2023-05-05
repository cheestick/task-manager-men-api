const Task = require("../models/Task");
const asyncWrapper = require("../middleware/async");

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
  // res.status(200).json({ tasks, amount: tasks.length });
  // res
  //   .status(200)
  //   .json({ success: true, data: { tasks, nbHits: tasks.length } });
});

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

const getTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  // add ObjectID format checking
  const task = await Task.findOne({ _id: taskID });
  if (!task) {
    res.status(404).json({ msg: `No task with id: ${taskID}` });
    return;
  }
  res.status(200).json({ task });
});

const updateTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  // add id to ObjectID accordance check and handel appropiate error
  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) return res.status(404).json({ msg: `No task with id: ${taskID}` });

  res.status(200).json({ task });
});

const editTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  // add id to ObjectID accordance check and handel appropiate error
  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
    // overwrite property is false by default, so PUT=PATCH
    // also we need to remove schema defaults to cause the errors
    overwrite: true,
  });
  if (!task) return res.status(404).json({ msg: `No task with id: ${taskID}` });

  res.status(200).json({ task });
});

const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  // add id to ObjectID matching check and error handling
  const task = await Task.findOneAndDelete({ _id: taskID });
  if (!task) {
    return res.status(404).json({ msg: `No task with id: ${taskID}` });
  }

  res.status(200).json({ task });
  // Other Deletion Response Variants
  //res.status(200).send();
  //res.status(200).json({ task: null, status: "success" });
});

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  editTask,
  deleteTask,
};
