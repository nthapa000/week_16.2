// postman.com
// postman.docs.com
// documentation website
import express from "express";

const app = express();

app.get("/",(req,res) => {
    res.json({
        message:"Hello DUNIYA"
    })
})

app.listen(3003)