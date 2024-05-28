const express = require("express");
const db = require("./config/connection");
const routes = require("./controllers");

// Port Connection
const PORT = process.env.PORT || 3001;
const app = express();

// App Express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

// Turn on connection to server
db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`Now listening on http://localhost:${PORT}`);
  });
});