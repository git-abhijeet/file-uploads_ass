const app = require("./index");

const connect = require("./configs/db")

app.listen(2345, async function() {
    await connect();
    console.log("listening on port 2345");
})




// http://localhost:2345/products?page=1&size=2