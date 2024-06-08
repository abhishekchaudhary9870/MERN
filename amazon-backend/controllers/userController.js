const userModel = require('../models/userModel.js');
const getUsers = async (req, res)=>{
    const data = await userModel.find();
    console.log(data);
console.log(req.url);

res.json({
    status:'success',
    results:0,
    data:{
        user:data,
    }
})
}

const addUser = async(req, res)=>{
   try{
    const {_id,...data}  = await userModel.create(req.body)
    console.log(data);
    res.json({
        status:'success',
        results:1,
        data:{
            user:data,
        }
    });
}

catch (err){
    res.status(403);
    res.json({
        status:'Fail',
        message:JSON.stringify(err),
        
});
}
}

const replaceUser = async(req, res)=>{
    
    
    try{
        const reqId = req.params.id;
    const data = {...req.body, reqId};
    const rest = await userModel.findOneAndReplace({_id:reqId,},req.body);
    res.json({
        status:'success',
        results:1,
        data:{
            user:rest,
        }
    })

}

catch(err){
    res.status(403);
    res.json({
        status:'Fail',
        message:JSON.stringify(err),
        
});
}
}


const deleteUser =async(req, res)=>{
    try{
        const reqId = req.params.id;
        const data = {...req.body, reqId};
    const result = await userModel.findByIdAndDelete({_id:reqId},data);
    res.json({
        status:'success',
        data:{
            user:result,
        }
    })
}

catch(err){
    res.json({
        status:'fail',
        result:1,
        data:{
            user:result,
        }
    })
}










}
module.exports = {
    getUsers,
    addUser,
    replaceUser,
    deleteUser,
}