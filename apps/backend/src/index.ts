// postman.com
// postman.docs.com
// documentation website
import express from "express";

const app = express();
import { BACKEND_URL } from "@repo/common/config";


app.get("/",(req,res) => {
    res.json({
        message:BACKEND_URL
    })
})

app.listen(3003)