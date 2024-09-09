const express = require("express");
const router = express.Router();
const {getTask, putTask, postTask, delTask} = require("../controllers/taskController")


/* Manera antigua de controlar la logica de una ruta
router.get("/", (req,res)=>{ 
    res.status(200).json( {message:"Get all tasks"} )
}) */

router.get("/", getTask )

router.put("/:id", putTask )

router.post("/", postTask)

router.delete("/:id", delTask)

module.exports = router;