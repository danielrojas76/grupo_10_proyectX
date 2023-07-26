const express = require("express")
const path = require('path')
const mainRouter = require('./routes/mainRoutes')
const userRouter = require('./routes/userRoutes')
const productRouter = require('./routes/productRoutes')

const app = express();

app.use(express.static("public")); 

app.set('view engine', 'ejs');

app.set('views', [
    path.join(__dirname, './views'),
    path.join(__dirname, './views/partials'),
    path.join(__dirname, './views/main'),
    path.join(__dirname, './views/products'),
    path.join(__dirname, './views/users')
]);


app.use("/", mainRouter);

app.use("/user", userRouter);

app.use("/product", productRouter);

app.listen(3000, () => 
    console.log("Servidor corriendo")
);