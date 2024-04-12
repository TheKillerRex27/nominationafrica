import express from "express";
import { User } from "../models/userModel.js";

const router = express.Router()

//* Get all users from Database
router.get("/", async (req, res) => {
	try {
		const users = await User.find({});

		if(!users) {
			return res.status(404).json({ message: "No users registered"});
		}

		return res.status(200).json(users)
	} catch (error) {
		console.log(error.message)
		res.status(500).send({ message: error.message });
	}
})

//*Get a user from database by ID
router.get("/:id", async (req, res) => {
	try {
		const { id } = req.params;

		const user = await User.findById(id);

		if(!user) {
			return res.status(404).json({ message: "User not found"});
		}

		return res.status(200).json(users)
	} catch (error) {
		console.log(error.message)
		res.status(500).send({ message: error.message });
	}
})

//* Add a new user to database
router.post("/", async (req, res) => {
	try {
		if (
			!req.body.name ||
			!req.body.email ||
			!req.body.password
		) {
			return res.status(400).send({
				message: `Must input all required fields ${ !req.body.name ? "name" : ""} ${ !req.body.name ? "email" : ""} ${ !req.body.password ? "password" : ""}`
			})
		};

		const newUser = {
			name: req.body.name,
			email: req.body.email,
			password: req.body.password
		};

		const user = await User.create(newUser);

		return res.status(201).send(user)
	} catch (error) {
		console.log(error.message)
		res.status(500).send({ message: error.message})
	}
})

//* Update an existing user in the database
router.put("/:id", async (req, res) => {
	try {
		if (
			!req.body.name ||
			!req.body.email ||
			!req.body.password
		) {
			return res.status(400).send({
				message: `Must input all required fields ${ !req.body.name ? "name" : ""} ${ !req.body.name ? "email" : ""} ${ !req.body.password ? "password" : ""}`
			})
		}

		const { id } = req.params;

		const result = await User.findByIdAndUpdate(id, req.body);

		if(!result) {
			return res.status(404).json({ message: "User not found"});
		}
		
		return res.status(200).send({ message: "User updated successfully" });

	} catch (error) {
		console.log(error.message);
		res.status(500).send({ message: error.message })
	}
})

//* Delete a user from the database
router.delete("/:id", async (req, res) => {
	try {
		const { id } = req.params;

		const result = await User.findByIdAndDelete(id);

		if(!result) {
			return res.status(404).json({ message: "User not found" });
		}

		return res.status(200).send({ message: "User deleted successfully" });
	} catch (error) {
		console.log(error.message);
		res.status(500).send({ message: error.message })
	}
})

export default router;