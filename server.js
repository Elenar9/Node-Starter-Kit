const express = require("express");
const app = express();
const port = 3000;
app.listen(port, function () {
    console.log("Server is listening on port 3000. Ready to accept requests!");
});