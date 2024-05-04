const productModel = require('../models/productsModel.js');
const getAllProducts = async (req, res)=>{
    const {sort = 'price', page = 1, pageSize =3,fields ='price', ...q} = req.query;
    const sortStr = sort.split(',').join(' ');
    const selectStr = sort.split(',').join(' ');
    console.log(q, sort);
    let query = productModel.find(q);
    console.log(query)
    query = query.sort(sortStr);
    
    const skip =pageSize*(page - 1);
    
    query.skip(skip).limit(pageSize)
    
    query = query.select(selectStr)
const products  = await query;
const totalResults = await productModel.countDocuments();

    console.log(products);
console.log(req.url);

res.json({
    status:'success',
    results:products.length,
    
    data:{
        products:products,
    },
    totalResults,
    pageSize,
    page,
})
}

const addProduct = async(req, res)=>{
   try{
    const {_id,...data}  = await productModel.create(req.body)
    console.log(data);
    res.json({
        status:'success',
        results:1,
        data:{
            products:data,
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

const replaceProduct = async(req, res)=>{
    
    
    try{
        const reqId = req.params.id;
    const data = {...req.body, reqId};
    const rest = await productModel.findOneAndReplace({_id:reqId,},req.body);
    res.json({
        status:'success',
        results:1,
        data:{
            products:rest,
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


const deleteProduct =async(req, res)=>{
    try{
        const reqId = req.params.id;
        const data = {...req.body, reqId};
    const result = await productModel.deleteMany({title:"New philips Vaccum Cleaner"},data);
    res.json({
        status:'success',
        data:{
            products:result,
        }
    })
}

catch(err){
    res.json({
        status:'fail',
        result:1,
        data:{
            products:result,
        }
    })
}










}
module.exports = {
    getAllProducts,
    addProduct,
    replaceProduct,
    deleteProduct,
}