import express from "express";
import dotenv from "dotenv";
// const dotenv = require("dotenv");
// const express = require("express");

import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
const app = express();


dotenv.config();
const PORT = process.env.PORT || 5000;
// const PORT =4000;
app.use(express.json());

app.use("/api/auth", authRoutes);
// console.log(authRoutes);

app.listen(PORT, ()=>{
	connectToMongoDB();
	console.log(`server is runnig on port ${PORT}` );
});
