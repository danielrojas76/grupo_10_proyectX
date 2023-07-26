const express = require("express")
const app = express();
let path = require('path')

let mainRouter = require('./routes/mainRoutes')
let userRouter = require('./routes/userRoutes')
let productRouter = require('./routes/productRoutes')

app.use(express.static("public")); 

app.set('view engine', 'ejs')
app.set('views', [
    path.join(__dirname, './views')
])

app.listen(3000, () => 
    console.log("Servidor corriendo")
);

app.use("/", mainRouter);

app.use("/user", userRouter);

app.use("/product", productRouter);
