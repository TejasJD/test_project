const express = require("express");
const morgan = require("morgan")
const cors = require("cors");
const auth = require("./routes/auth.js");

const app = express();

app.use(morgan("tiny"))
app.use(cors())
app.use("/api/auth", auth);

app.listen(5000, () => {
    console.log("server listening on port 5000");
});