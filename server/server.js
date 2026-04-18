import express from "express"
import { connectdb } from "./config/db";
let app = express();

let port = 3000;

connectdb();

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})