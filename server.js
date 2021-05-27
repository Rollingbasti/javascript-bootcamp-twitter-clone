const express = require("express");
const app = express();
const path = require("path");

app.use(express.urlencoded({ extended: true }))

//Set view engine
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
    res.render("index");
});

app.post('/', (req, res) => {
    const { username, password } = req.body

    if (!username || !password) {
        res.render("error", {
            message: "Bitte Benutername und Passwort angeben!",
        })
        return
    }

    console.log(req.body, username, password)
    res.end()
})

app.listen(3000, '0.0.0.0', () => console.log("Server ready"));