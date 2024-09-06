const getTask = (req,res)=>{
    res.status(200).json({message:"Se reciben las tareas desde el controlador" });
}

const putTask = (req, res) =>{
    res.status(200).json({message: "Se actualizó la tarea desde el controlador"});
}

const postTask = (req,res)=>{
    const id = req.params.id
    res.status(200).json({message: `Se actualizó la tarea ${id} desde el controlador`});
}

const delTask =(req,res)=>{
    const id = req.params.id;
    res.status(200).json({message:`Se eliimina la tarea ${id} desde el controlador`});
}




module.exports = {getTask, postTask, delTask, putTask};

