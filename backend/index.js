const express = require("express");
const app = express();

app.use("/", (req, res) => {
    res.json({
        ok: true, 
        message: "working fine!"
    })
});

app.listen(5000, () => {
    console.log("server listening on port 5000");
});