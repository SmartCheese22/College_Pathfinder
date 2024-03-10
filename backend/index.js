const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const collegeSearchModel = require("./models/collegeS")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const cookieParser = require("cookie-parser")
const adminEmail = process.env.ADMIN_EMAIL;
const adminPassword = process.env.ADMIN_PASSWORD;

const app = express()
app.use(express.json())
app.use(cors({
    origin: ["http://localhost:5173"],
    method: ["GET", "POST"],
    credentials: true
}))
app.use(cookieParser())


mongoose.connect("mongodb+srv://ayushm2504:ayushmeena@collegepathfinder.wsekeel.mongodb.net/");

app.post('/register', (req,res) => {
    const {name, email ,password} = req.body;
    bcrypt.hash(password, 10)
    .then(hash => {
        collegeSearchModel.create({name,email,password: hash})
        .then(collegeSearch => res.json(collegeSearch))
        .catch(err => res.json(err))
    }) .catch(err => console.log(err.message))
})

app.post("/login", (req,res) => {
    const {email, password} = req.body;
    collegeSearchModel.findOne({email: email})
    .then(user => {
        if(user){
            bcrypt.compare(password, user.password, (err, response) => {
                if(response){
                    const token = jwt.sign({email: user.email}, "jwt-secret-key", {expiresIn:"1d"})
                    res.cookie("token", token);
                    res.json("Login Successful")
                } else{
                    res.json("Incorrect password")
                }
            })
        } else {
            res.json("User not found");
        }
    })
    .catch(err => {
        console.error(err);
        res.status(500).json("Server error");
    });
});

app.post('/adminlogin', (req, res) => {
    const { email, password } = req.body;
    if (email === adminEmail && password === adminPassword) {
        res.json("Login Successful")
    } else {
        res.json("Invalid credentials")
    }
});

const verifyUser = (req, res, next) => {
    const token = req.cookies.token;
    if(!token){
        return res.json("The token was not available")
    } else{
        jwt.verify(token, "jwt-secret-key", (err,decode) => {
            if(err) return res.json("Token is wrong")
            next();
        })
    }
}

app.get('/home', verifyUser, (req, res) => {
    return res.json("Login Successful")
})


app.listen(3001, () => {
    console.log("Server is running")
}) 