const axios = require("axios")

const runFunc = async() => {
    const { data } = await axios.get("http://localhost:5000");
    console.log(data);
};

runFunc();