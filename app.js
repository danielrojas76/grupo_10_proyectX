const express = require("express")
const app = express();
const dotenv = require('dotenv').config();
let path = require('path')

let mainRouter = require('./routes/mainRoutes')
let userRouter = require('./routes/userRoutes')
let productRouter = require('./routes/productRoutes')

app.use(express.static("public")); 

app.set('view engine', 'ejs')
app.set('views', [
    path.join(__dirname, './views')
])


app.use("/", mainRouter);

app.use("/user", userRouter);

app.use("/product", productRouter);

app.listen(process.env.PORT, () => { 
    console.log("Servidor escuchando en Puerto" + process.env.PORT);
});
 
