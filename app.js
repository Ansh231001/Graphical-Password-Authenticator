const express = require("express");
const multer = require("multer");
const mongoose = require('mongoose');
var bodyParser = require("body-parser");
const ejs = require('ejs');
const fs = require('fs');
const path = require('path');
const { stringify } = require("querystring");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");



idDictionary = {
    "1" : "X@ZETe0:",
    "2" : "&m-N;e^d",
    "3" : "~17^BQc8",
    "4" : "r;F(f$Q'",
    "5" : "FE.3$HPw",
    "6" : "kLwu;PZv",
    "7" : "jFack?Jw",
    "8" : "o'M=!O^D",
    "9" : "DiEQ(!S:"
}

var count = 0;
for (var i in idDictionary) {
   if (idDictionary.hasOwnProperty(i)) count++;
}



const URI = "mongodb://localhost:27017/Customer"
mongoose.connect(URI, {useNewUrlParser: true });


const userSchema = {
    username: String,
    hashedPassword: String,
}
const User = mongoose.model("User", userSchema);





//SignUp
app
    .route("/signup")
    .get((req, res) => {
        res.sendFile(__dirname + "/index.html")
    })
    .post((req, res) => {
        var password = req.body.password;
        const password_split = password.split("");
        let ustring;
        for(let i=0; i<password_split.length; i++)
        {
        console.log(count);
        for(let j=0; j<count; j++)
        {
            if(parseInt(password_split[i]) == (j+1))
            {
            ustring += idDictionary[j];
            }
        }
        }
        const newUser = new User({
            username: req.body.email,
            hashedPassword: ustring
        });
        newUser.save((err) => {
            if (err) console.log(err);
            else res.send("Success");
        });

    })




//Login

app
    .route("/login")
    .get((req, res) => {
        res.sendFile(__dirname + "/login.html")
    })
    .post((req, res) => {
        var password = req.body.password;
        const password_split = password.split("");
        let ustring;
        for(let i=0; i<password_split.length; i++)
        {
        console.log(count);
        for(let j=0; j<count; j++)
        {
            if(parseInt(password_split[i]) == (j+1))
            {
            ustring += idDictionary[j];
            }
        }
        }
        User.findOne({ username: req.body.email }, (err, data) => {
            if (err)
                return err;
            else {
                if (data.hashedPassword === ustring)
                    res.send(req.body.email + " login successfull")
                else
                    res.send("Wrong Password")
            }
        })
    })


app.listen("2000", () => {
    console.log("Server is running on port 2000");
})





//AnshGupta231001
// 7vugIAeGXgfcQuRW