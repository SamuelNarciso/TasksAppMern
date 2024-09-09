const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000 ;
const router = require("./routes/taskRoutes");
const app = express();


// Metodo get mas simple: app.get("ruta",(req,res)=>{ ... }) Recibe una ruta y una callback req,res
// app.get("/api/tasks", (req,res)=>{ 
    //     res.status(200).json( {message:"Get all tasks"} )
    // })
    
/* 2 cambios, primero usar app.use y no app.get, segundo, podemos hacer el require directo 
 en la función callback app.use("/api/tasks", require("./routes/taskRoutes"))
sin embargo, prefiero usar const e import por separado.
 */

app.use(express.json())
app.use(express.urlencoded( {extended: false} ));



app.use("/api/tasks", router)

app.listen( port,()=>{return console.log(`Escuchando el puerto ${port}`);} )
