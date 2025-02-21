// bfhl.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to connect the frontend with backenf file
app.use(cors());
app.use(express.json());
app.get("/bfhl", (req, res) => {
    res.status(200).json({ operation_code: 1 });
});


app.post("/bfhl", (req, res) => {
    const { first_name, last_name, dob, data } = req.body;

    if (!first_name || !last_name || !dob || !data || !Array.isArray(data)) {
        return res.status(400).json({ is_success: false, message: "Invalid input" });
    }

    
    const user_id = `${first_name.toLowerCase()}_${last_name.toLowerCase()}_${dob.replace(/-/g, "")}`;

    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item)).sort();

    
    const highest_alphabet = alphabets.length ? [alphabets[alphabets.length - 1]] : [];

    const response = {
        is_success: true,
        user_id: user_id,
        email: "22bcs12480@cuchd.in",
        roll_number: "22bcs12480",
        numbers,
        alphabets,
        highest_alphabet
    };

    res.status(200).json(response);
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
