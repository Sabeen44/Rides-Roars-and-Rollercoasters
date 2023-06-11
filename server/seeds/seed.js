const db = require("../config/connection");
const { Park } = require("../models");
const parkData = require("./parkData.json");

db.once("open", async () => {
  await Park.deleteMany({});
  await Park.create(parkData);

  console.log("all done!");
  process.exit(0);
});
