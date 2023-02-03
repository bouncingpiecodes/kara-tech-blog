const { Post } = require("../models");

const postData = [
  {
    title: "testing",
    content: "testing",
    user_id: 1,
  },
  {
    title: "testing",
    content: "testing.",
    user_id: 2,
  },
  {
    title: "testing",
    content: "testing",
    user_id: 3,
  },
  {
    title: "testing",
    content: " testing ",
    user_id: 4,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
