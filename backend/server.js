//import the needed modules
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');

const app = express();
app.use(cors());
app.use(express.json());

// Use the body-parser middleware to parse JSON requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "sparksoultest"

})

db.connect((err) => {
    if (err) {
        console.error('Error connecting to database: ' + err.stack);
        return;
    }
    console.log('Connected to database as id ' + db.threadId);
});


//signup route
app.post('/register', async (req, res) =>{
    
    // Get the name, email, and password from the request body
    const name = req.body.name;
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;
    const personality = req.body.personality

    console.log(name);

    // Check if the user already exists by username or email
    const checkUserQuery = "SELECT * FROM login WHERE username = ? OR email = ?";

    db.query(checkUserQuery, [username, email], async (err, existingUser) => {
        if (err) {
            console.error("Error checking user existence: " + err.message);
            return res.status(500).json("Error occurred while checking user existence");
        }

        if (existingUser.length > 0) {
            // User already exists, return a response indicating the conflict
            return res.status(409).json("User already exists with this username or email.");
        }

            // Generate a UUID for the new user
            const userId = uuidv4();

            // Hash the password
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            const sql = "INSERT INTO login (id, name, email, username, password, personality) VALUES (?,?,?,?,?,?)";

            db.query(sql, [userId, name, email, username, hashedPassword, personality], (err, data) => {
                    if (err) {
                        console.error("Error inserting into database: " + err.message);
                        return res.status(500).json("Error occurred while saving data");
                    }
                    // Inside your server POST endpoint after successfully inserting the user into the database
                    return res.status(201).json({ success: true, userId, name, username, personalityType: personality });

            });
    });
})


//route to fetch user id and username
/*
app.put("/user/:userId", (req, res) => {
    const userId = req.params.userId;
    const personalityType = req.body.personality;

    // Perform update in the database based on userId and personalityType
    const updateQuery = "UPDATE login SET personality = ? WHERE id = ?";
    db.query(updateQuery, [personalityType, userId], (err, result) => {
        if (err) {
            console.error("Error updating personality type:", err);
            return res.status(500).json({ error: "Internal Server Error" });
        }
        return res.status(200).json({ success: true, message: "Personality type updated successfully" });
    });
});*/

app.listen(8081, ()=>{
    console.log("listening")
})


