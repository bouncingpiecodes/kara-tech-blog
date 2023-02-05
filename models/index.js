// import models
const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");

// define association and use the user has many post
User.hasMany(Post, {
  foreignKey: "user_id",
});

// post belongs to user
Post.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "cascade",
});

// user has many comment
User.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: "cascade",
});

// comment belongs to user
Comment.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "cascade",
});

// post has many comments
Post.hasMany(Comment, {
  foreignKey: "post_id",
  onDelete: "cascade",
});

// comment belongs to post
Comment.belongsTo(Post, {
  foreignKey: "post_id",
  onDelete: "cascade",
});

//export models
module.exports = { User, Post, Comment };
