const express = require("express");
const app = express();
const path = require("path");

//Set view engine
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
    res.render("index");
});

app.post('/', (req, res) => {
    
})

app.listen(3000, '0.0.0.0', () => console.log("Server ready"));