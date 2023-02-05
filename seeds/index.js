// adding sequelize requires
const sequelize = require("../config/connection");

const seedUsers = require("./userData");
const seedPosts = require("./postData");
const seedComments = require("./commentData");

// async function for await
const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  await seedUsers();
  await seedPosts();
  await seedComments();
  process.exit(0);
};

seedDatabase();
