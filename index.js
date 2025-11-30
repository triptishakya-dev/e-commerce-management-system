import express from "express"
import cors from "cors"
import addressRoutes from "./routers/addressRoutes.js";
import orderRoutes from "./routers/orderRoutes.js";
import productRoutes from "./routers/productRoutes.js";

const app = express()

const  port = 3000

app.use(cors({
    origin: "http://localhost:3001", 
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}))

app.get("/" ,(req,res) =>{
    res.send("hello word")
})



app.use(express.json())

app.use("/", addressRoutes);
app.use("/", orderRoutes);
app.use("/", productRoutes);

app.listen(port , () =>{
console.log("my port is listening")
})

