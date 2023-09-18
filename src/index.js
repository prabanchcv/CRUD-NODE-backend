// app.js

const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const connectDB = require("./config/mongo");
const userRoute = require("./interfaces/routes/userRoute");
const adminRoute = require("./interfaces/routes/adminRoute");
const debug = require("debug")("myapp:server");

const app = express();
const port = 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/public/images", express.static("public/images"));

const allowedOrigins = ["http://localhost:3000"];
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

// Routes
app.use("/", userRoute);
app.use("/admin", adminRoute);

app.get("/", (req, res) => {
  res.send().status(200);
});

app.listen(port, () => {
  debug(`Server is running on http://localhost:${port}`);
});
