const { Mongoose } = require("mongoose");
const Users = require("../models/User");
const { toast } = require("react-hot-toast");

exports.createUsers = async (req, res) => {
	try {
		const { name, email, password } = req.body;
		if (!name || !email || !password) {
			return res
				.status(400)
				.json({ success: false, message: "All fields are required" });
		}
		const user = await Users.create({
			name: name,
			email: email,
            password:password
		});
		console.log("user "+user);
		return res.status(200).json({
			success: true,
			message: "User Registered Successfully",
		});
	} catch (error) {
		return res.status(500).json({
			success: true,
			message: error.message,
		});
	}
};
