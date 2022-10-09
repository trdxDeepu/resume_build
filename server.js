const express = require('express')
const app = express();
const dbConnect = require("./dbConnect");
app.use(express.json());
const userRoute = require("./Routes/userRoute");

const port = 5000

app.use("/api/user/", userRoute);

app.get('/',(req,res)=> res.send('Hello World'))
app.listen(port,()=>console.log(`Example app listeamning port ${port}!`))
 