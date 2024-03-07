const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config({path: "src/.env"});
const app = express();
const PORT = process.env.PORT || 5000;
const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");
const cors = require("cors");

app.use(cors());

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {console.log("Connected to mongoDB");})
    .catch((err) => {console.error("Could not connect", err)});

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

app.get("/", (req, res) => {
    res.send("Backend is running");
})

app.listen(PORT, () => {console.log("Server on at", PORT);})