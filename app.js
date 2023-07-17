const express = require("express")
const app = express();
const path =  require("path");

app.use(express.static("public")); 

app.listen(3000, () => 
    console.log("Servidor corriendo")
);
//HOME
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/index.html"))    
});
//PRODUCT


//CARRITO
   

//LOGIN
app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/login.html"))    
});


//REGISTRO
app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/register.html"))    
});

//password
app.get("/password", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/password.html"))    
});

