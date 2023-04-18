const express = require("express");
const cors = require("cors");
const app = express();
const session = require('express-session');  // express-sessions
const { v4: uuidv4 } = require('uuid'); //To call: uuidv4();
//const { reqRateLimiter } = require('./middlewares/rateLimiter/reqRateLimiter')

var corsOptions = {
  origin: "http://localhost:8081"
};

// Configure Middlewares
app.use(cors(corsOptions));
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
  res.json({ message: "Welcome to AgroAPI service." });
}); 

require("./routes/farmer.routes")(app);
require("./routes/buyer.routes")(app);
require("./routes/processor.routes")(app)

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});