const connectDB = require('../config/connection');
const { Tech } = require('../models/index');

const techData = require('./techData.json');

(async function() {
  const connection = await connectDB();

  await Tech.deleteMany({});

  await Tech.insertMany(techData);

  console.log('Technologies seeded!');
  connection.disconnect();
  process.exit(0);
})()
