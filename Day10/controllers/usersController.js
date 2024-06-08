const fsPromises = require('fs/promises');
const getUser = (req, res)=>{
    res.status(501);
    res.json({
        status:'fail',
        message:'Failed to load'
    })
}


const addUser = (req, res)=>{
    res.status(501);
    res.json({
        status:'fail',
        message:'Failed to load'
    })
}


const replaceUser = (req, res)=>{
    res.status(501);
    res.json({
        status:'fail',
        message:'Failed to load'
    })
}


const deleteUser = (req, res)=>{
    res.status(501);
    res.json({
        status:'fail',
        message:'Failed to load'
    })
}

module.exports ={
    getUser,
    addUser,
    replaceUser,
    deleteUser,
}