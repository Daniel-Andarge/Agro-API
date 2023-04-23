const express = require("express");
const cors = require("cors");
const app = express();
const { v4: uuidv4 } = require('uuid'); //To call: uuidv4();

var corsOptions = {
  origin: "http://localhost:8081"
};

// Configure Middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(function(req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

const db = require("./models")

db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

 app.get("/", (req, res) => {
  res.json({ message: "Welcome to AgroAPI service." });
}); 

require("./routes/farmer.routes")(app);
require("./routes/buyer.routes")(app);
require("./routes/processor.routes")(app);
require("./routes/equipmentDealer.routes")(app)
require("./routes/user.routes")(app);
require("./routes/auth.routes")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

