require('dotenv').config();

const express = require("express") ;
const app = express()


app.use(express.json()) ;

//Simple Logger
if (process.env.NODE_ENV === "dev") {
    app.use((req , res , next) => {
        console.log(`${req.method}  ${req.originalUrl}`);
        next();
        
    })
};


app.get("/test" , (req , res) => {
    res.json({msg : "Test Route"})
})

//db connection
const connectDB = require("./config/db") ;
connectDB() ; 


const port = process.env.PORT 
app.listen(port, () => {
    console.log("test")
    console.log(port)
    
});