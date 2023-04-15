const express = require("express");
const cors = require("cors");
const app = express();
//const { reqRateLimiter } = require('./middlewares/rateLimiter/reqRateLimiter')
const session = require('express-session');
var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(reqRateLimiter);
app.use(session({
  secret: 'keyboard cat',
  cookie: {
    sameSite: 'strict'
  }
}));


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

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});