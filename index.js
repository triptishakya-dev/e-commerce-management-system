import express from "express"
import addressRoutes from "./routers/addressRoutes.js";

const app = express()

const  port = 3000

app.get("/" ,(req,res) =>{
    res.send("hello word")
})



app.use(express.json())

app.use("/", addressRoutes);

app.listen(port , () =>{
console.log("my port is listening")
})

