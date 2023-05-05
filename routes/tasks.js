const express = require("express");
const router = express.Router();

const { getAllTasks } = require("../controllers/tasks.controller");

//router.get('/api/ve/tasks')
//router.post('/api/ve/tasks')
//router.get('/api/ve/tasks/:id')
//router.patch('/api/ve/tasks/:id')
//router.delete('/api/ve/tasks/:id')

router.route("/").get(getAllTasks);

module.exports = router;
