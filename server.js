const express = require("express");
const mysql = require("mysql2");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// MySQL Connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",       // Change if your MySQL has a password
    database: "portfolio_db"
});

// Connect to Database
db.connect((err) => {
    if (err) {
        console.error("Database Connection Failed:", err);
        return;
    }
    console.log("Connected to MySQL Database");
});

// Home Page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Get Projects
app.get("/api/projects", (req, res) => {

    const sql = "SELECT * FROM projects";

    db.query(sql, (err, results) => {

        if (err) {
            return res.status(500).json({ error: err.message });
        }

        res.json(results);

    });

});

// Save Contact Message
app.post("/contact", (req, res) => {

    const { name, email, message } = req.body;

    const sql = `
        INSERT INTO contacts(name, email, message)
        VALUES (?, ?, ?)
    `;

    db.query(sql, [name, email, message], (err) => {

        if (err) {
            return res.status(500).send("Failed to send message.");
        }

        res.send("Message sent successfully!");

    });

});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
