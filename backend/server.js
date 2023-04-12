const express = require("express");
const cors = require("cors");
//const apiRouter = require('./routes/farmer.routes')

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

//app.use('apiRouter', apiRouter);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const db = require("./models")
db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Agro API service." });
});

require("./routes/farmer.routes")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});