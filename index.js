const express = require("express");
require("dotenv").config();
const authRouter = require("./routes/route.auth");

const app = express();

const port = process.env.PORT || 8800;

app.use(express.json());
app.use("/", authRouter);

app.listen(port,()=>{
    console.log(`Server is running on PORT: ${port}`);
});