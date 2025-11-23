require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const connectionDB = require('./config/db')

app.use(cors());
app.use(express.json());

connectionDB();

const PORT = process.env.PORT || 4000;


app.get("/", (req, res) => {
  res.send("Backend is running");
});
app.use('/api', require('./routes/seed'));
app.use('/api', require('./routes/dashboard'))


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
