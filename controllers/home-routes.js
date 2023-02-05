// imports connections
const sequelize = require("../config/connection");
// imports models
const { Post, User, Comment } = require("../models");
// imports express' router object
const router = require("express").Router();
