// ************ Require's ************
const express = require("express");
const path = require('path');
const dotenv = require('dotenv').config();
const methodOverride = require('method-override');// Pasar poder usar los métodos PUT y DELETE
const cookieParser = require('cookie-parser');
const session = require('express-session');
const {userLog} =  require('./middlewares/userLog'); 
// ************ express() - (don't touch) ************
const app = express();

// ************ Middlewares - (don't touch) ************
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); 
app.use(methodOverride('_method')); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE
app.use(cookieParser());
app.use(session({ secret: 'Secreto!!', resave: false, saveUninitialized: true}));
app.use(userLog); 
// ************ Template Engine - (don't touch) ************
app.set('view engine', 'ejs');
app.set('views', [
    path.join(__dirname, './views'),
    path.join(__dirname, './views/partials'),
    path.join(__dirname, './views/main'),
    path.join(__dirname, './views/products'),
    path.join(__dirname, './views/users')
]);

// ************ Route System require and use() ************
const mainRouter = require('./routes/mainRoutes');
const userRouter = require('./routes/userRoutes');
const productRouter = require('./routes/productRoutes');

app.use((req, res, next) => {
    // Si hay una cookie guardada con el email de un usuario
    if(req.cookies.email){
        const userModel = require('./models/userModels');

        // Mediante el modelo vamos a buscar los datos del usuario
        const user = userModel.findByEmail(req.cookies.email);

        // Guardamos en session los datos del mismo
        req.session.user = user;
    }
    // Si no hay cookie de email, no hacemos nada
    next();
});



app.use("/", mainRouter);
app.use("/user", userRouter);
app.use("/product", productRouter);

app.listen(process.env.PORT, () => { 
    console.log("Servidor escuchando en Puerto " + process.env.PORT);
});