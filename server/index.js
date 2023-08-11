const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require("dotenv");
const database = require("./config/database");
const cors = require("cors");
const userRoutes = require("./routes/user");

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

database.connect();

app.use(bodyParser.json());
app.use(
	cors({
		origin:"http://localhost:3000",
		credentials:true,
	})
)

app.use("/api", userRoutes);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
