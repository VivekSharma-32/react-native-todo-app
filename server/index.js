const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();

// dotenv config
dotenv.config();

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use("/api/v1/auth", require("./routes/authRoutes"));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
