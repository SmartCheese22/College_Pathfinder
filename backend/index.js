const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const collegeSearchModel = require("./models/collegeS")
const collegeGoingModel = require("./models/collegeG")
const College = require('./models/college');
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


mongoose.connect("mongodb+srv://prathamesh:prathamesh22@cluster0.jok6kqx.mongodb.net");

app.post('/registerCollegeS', (req, res) => {
    const { name, email, password } = req.body;
    bcrypt.hash(password, 10)
        .then(hash => {
            collegeSearchModel.create({ name, email, password: hash })
                .then(collegeSearch => res.json(collegeSearch))
                .catch(err => res.json(err))
        }).catch(err => console.log(err.message))
})

app.post('/registerCollegeG', (req, res) => {
    const { name, username, email, password, college, major, graduationYear, opinion } = req.body;
    bcrypt.hash(password, 10)
        .then(hash => {
            collegeGoingModel.create({ name, username, email, password: hash, college, major, graduationYear, opinion })
                .then(collegeGoing => res.json(collegeGoing))
                .catch(err => res.json(err))
        }).catch(err => console.log(err.message))
})

// Modify login route to also return user details for collegeS model
app.post("/loginCollegeS", (req, res) => {
    const { email, password } = req.body;
    collegeSearchModel.findOne({ email: email })
        .then(user => {
            if (user) {
                bcrypt.compare(password, user.password, (err, response) => {
                    if (response) {
                        const token = jwt.sign({ email: user.email }, "jwt-secret-key", { expiresIn: "1d" })
                        res.cookie("token", token);
                        res.json({ message: "Login Successful", user }); // Return user details along with the message
                    } else {
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

// New API endpoint to fetch user details by email for collegeS model
app.get("/getUserDetailsByEmailCollegeS/:email", (req, res) => {
    const { email } = req.params;
    collegeSearchModel.findOne({ email: email })
        .then(user => {
            if (user) {
                res.json(user); // Return user details
            } else {
                res.status(404).json({ message: "User not found" });
            }
        })
        .catch(err => {
            console.error(err);
            res.status(500).json("Server error");
        });
});


app.post("/loginCollegeG", (req, res) => {
    const { email, password } = req.body;
    collegeGoingModel.findOne({ email: email })
        .then(user => {
            if (user) {
                bcrypt.compare(password, user.password, (err, response) => {
                    if (response) {
                        const token = jwt.sign({ email: user.email }, "jwt-secret-key", { expiresIn: "1d" })
                        res.cookie("token", token);
                        res.json({ message: "Login Successful", user }); // Return user details along with the message
                    } else {
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

app.get("/getUserDetailsByEmail/:email", (req, res) => {
    const { email } = req.params;
    collegeGoingModel.findOne({ email: email })
        .then(user => {
            if (user) {
                res.json(user); // Return user details
            } else {
                res.status(404).json({ message: "User not found" });
            }
        })
        .catch(err => {
            console.error(err);
            res.status(500).json("Server error");
        });
});


app.get('/api/search', async (req, res) => {
    const { college, branch } = req.query;
    try {
      // Find students based on college and branch
      const students = await collegeGoingModel.find({ college, major: branch });
      res.json(students);
    } catch (error) {
      console.error('Error searching students:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });



app.post('/adminlogin', (req, res) => {
    const { email, password } = req.body;
    if (email === adminEmail.trim() && password === adminPassword.trim()) {
        res.json("Login Successful")
    } else {
        res.json("Invalid credentials")
    }
});

const verifyUser = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.json("The token was not available")
    } else {
        jwt.verify(token, "jwt-secret-key", (err, decode) => {
            if (err) return res.json("Token is wrong")
            next();
        })
    }
}

app.get('/home', verifyUser, (req, res) => {
    return res.json("Login Successful")
})

app.post('/logout', verifyUser, (req, res) => {
    res.clearCookie("token");
    return res.json("User Logged out")
})
  

app.get('/api/compare', async (req, res) => {
const { college1, college2 } = req.query;

try {
    const [college1Data, college2Data] = await Promise.all([
    College.findOne({ name: college1 }),
    College.findOne({ name: college2 }),
    ]);

    const data = {
    college1: college1Data || {},
    college2: college2Data || {},
    };

    res.json(data);
} catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching college data' });
}
});

app.get('/api/useropinion', async (req, res) => {
    const { college1, college2, branch } = req.query;
    try {
        const [user1Data, user2Data] = await Promise.all([
            collegeGoingModel.find({ college: college1, major: branch }),
            collegeGoingModel.find({ college: college2, major: branch }),
        ]);

        const data = {
            user1: user1Data || [],
            user2: user2Data || [],
        };

        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error Fetching User Opinions' });
    }
});


app.listen(3001, () => {
    console.log("Server is running")
}) 