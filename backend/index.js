const express = require("express");
const morgan = require("morgan")
const cors = require("cors");
const auth = require("./routes/auth.js");

const app = express();

// THIRD-PARTY MIDDLEWARES
// morgan middleware used to get information about any status, method of response to request
app.use(morgan("tiny"))
// cors middleware for cross origin resource sharing
app.use(cors())

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