const mongoose = require("mongoose");

const { ATLAS_USER, ATLAS_PSWD } = process.env;

const connectionString = `mongodb+srv://${ATLAS_USER}:${ATLAS_PSWD}@nodeexpressproject.npb2ppk.mongodb.net/task-manager-men?retryWrites=true&w=majority`;

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("CONNECTED TO THE DB..."))
  .catch((err) => console.log(err));
