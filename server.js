const express = require('express')
const ejs = require('ejs');

const app = express();
const port = 3000;

app.set('view engine', "ejs");
app.set("views", "./src")
// virtual routes
app.use('/', express.static(__dirname + '/src'))
app.use('/js', express.static(__dirname + "/js"));
app.use('/images', express.static(__dirname + "/images"));
app.use('/styles', express.static(__dirname + "/styles"));

// real routes
app.get("/", (req,res) => {
    // res.sendFile(__dirname + "/src/index.ejs");
    const data = {
        name : "Bhavish Rohilla",
        personal_message : "I am 23 year old, IT student studying at Humber College. I really enjoy solving coding problems",
        skill1 : "HTML",
        skill2 : "REACT"
    }
    res.render("index", {data});
});



app.get("/my-works", (req,res) => {
    // res.sendFile(__dirname + "/src/my-works.html");


    const colors = [
        {
            name : "green",
            hex : "#00ff00",
        },
        {
            name : "red",
            hex : "#00ff00"
        }
    ];
    res.render("my-works", {colors});
});

app.get("/contact", (req,res) => {
    // res.sendFile(__dirname + "/src/contact.html");
    const data = {
        email : "bhavishrohilla59@gmail.com"
    }

    res.render("contact", {data});
});


// port listening at 3000
app.listen(port, () => {
    console.log(`App running at port http://localhost:${port}`)
})