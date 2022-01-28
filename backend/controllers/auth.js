const mongoose = require("mongoose");
const session = require("express-session");
let passport = require("passport");
let crypto = require("crypto");
const connection = require("../config/database");
const {genPassword, validPassword} = require('../lib/passwordUtils');
const User = connection.models.User;

require("dotenv").config();

// const sessionStore = new MongoStore({
//     mongoUrl: process.env.DB_STRING,
//     collectionName: `sessions`
// });

const login = (req, res, next) => {
    res.json({
        ok: true,
        message: "at login page!"
    });
};

const register = (req, res, next) => {
    res.json({
        ok: true,
        message: "at register page!"
    });
};

module.exports = {
    login,
    register
}