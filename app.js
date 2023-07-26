const express = require("express");
const dotenv = require('dotenv').config();
const path = require('path');
const userRouter = require('./routes/userRoutes');
const productRouter = require('./routes/productRoutes');
const mainRouter = require('./routes/mainRoutes');

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

app.listen(process.env.PORT, () => { 
    console.log("Servidor escuchando en Puerto" + process.env.PORT);
});
 
