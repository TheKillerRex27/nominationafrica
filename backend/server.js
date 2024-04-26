import express, { response } from "express";
import { PORT, mongoDBURL } from "./config.js"
import mongoose from "mongoose"
import userRoute from "./routes/userRoute.js"
import cors from "cors"


const app = express();

app.use(express.json())
app.use(express.static("public"));

app.use(cors());

app.get("/", (req, res) => {
	res.send("Hello World")
});

app.use("/users", userRoute);

app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`);
});

mongoose.
	connect(mongoDBURL)
	.then( () => {
		console.log("App connected to Database")
	})
	.catch( (error) => {
		console.log(`Error connecting to Database.\n ${error}`)
	})