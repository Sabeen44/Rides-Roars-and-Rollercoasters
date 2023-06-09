const db = require("../config/connection");
const { Destinations } = require("../models");

const parkData = require("./parkData.json");

db.once("open", async () => {
  await Destinations.deleteMany({});

  const destinations = await Destinations.insertMany(parkData);

  console.log("Destinations seeded!");
  process.exit(0);
});
