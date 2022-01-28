const express = require("express");
const morgan = require("morgan")
const cors = require("cors");
const auth = require("./routes/auth.js");
const mongoose = require("mongoose");
const session = require("express-session");
let passport = require("passport");
let crypto = require("crypto");
const connection = require("./config/database");
const MongoStore = require("connect-mongo");

require("dotenv").config();

console.log(connection.models);

// console.log(process.env);
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const sessionStore = new MongoStore({mongoUrl: process.env.DB_STRING, collectionName: `sessions`});

// THIRD-PARTY MIDDLEWARES
// morgan middleware used to get information about any status, method of response to request
app.use(morgan("tiny"))

// console.log(process.env.SECRET);
// session storage configuration
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    store: sessionStore,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
}));
// // cors middleware for cross origin resource sharing
// app.use(cors())
// APPLICATION SPECIFIC ROUTES
// middleware for auth
app.use("/api/auth", auth);

// ERROR HANDLING
// custom error handler function
app.use((err, req, res, next) => {
    console.log(err.message);
    res.status(500).json({
        ok: false,
        message: `error on server side: ${err.message}`
    })
});

// server runs on port 5000
app.listen(5000, () => {
    console.log("server listening on port 5000");
});