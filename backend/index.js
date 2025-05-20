require('dotenv').config();
const express = require("express");
const cors = require('cors');
const app = express();
const mongoose = require("mongoose");

const {userRouter} = require("./routes/user");
const {courseRouter} = require("./routes/course");
const {adminRouter} = require("./admin/admin");

app.use(cors());
app.use(express.json());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/courese", courseRouter);

async function main() {
    await mongoose.connect(process.env.MONGO_URL);
    app.listen(3000, () => {
        console.log('Server running on port 3000');
    });
}

main();