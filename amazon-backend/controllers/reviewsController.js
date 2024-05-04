const reviewsModel = require("../models/reviewsModel.js");

const addReview = async (req, res) => {
  try {
    const productId = req.params.id;

    const { _id, userId, ...reqData } = req.body;

    console.log(productId,req.body.userId)
    let query = reviewsModel.find({ productId });

    const result = await query.find({userId});
    
    console.log(result);
    if (result.length > 0) {
      res.status(403);
      console.log("----user already exists----");
      res.json({
        status: "failed",
      });
    } else {
      const data = await reviewsModel.create(
        {
          userId,
          reqData,
          productId,
          
    });
      // const data = [];
      res.json({
        status: "success",
        results: 1,
        data: {
          products: reqData,
        },
      });
    }
  } catch (err) {
    res.status(403);
    console.log(err);
    res.json({
      status: "failed",
      Message: JSON.stringify(err),
    });
  }
};




const getReview = async (req, res) => {
  try {
    const productId = req.params.id;

    const { _id, userId, ...reqData } = req.body;

    console.log(productId,req.body.userId)
    let query = reviewsModel.find({ productId });

    const result = await query.find({userId});
    
    console.log(result);
    // if (result.length > 0) {
    //   res.status(403);
    //   console.log("----user already exists----");
    //   res.json({
    //     status: "failed",
    //   });
    // } else {
    //   const data = await reviewsModel.create(
    //     {
    //       userId,
    //       reqData,
    //       productId,
          
    // });
      // const data = [];
      res.json({
        status: "success",
        results: 1,
        data: {
          products: reqData,
        },
      });
    }
  
   catch (err) {
    res.status(403);
    console.log(err);
    res.json({
      status: "failed",
      Message: JSON.stringify(err),
    });
  }

};


const editReview = async(req, res)=>{
    
    
  try{
      const reqId = req.params.id;
  const data = {...req.body, reqId};
  const rest = await reviewsModel.findOneAndReplace({_id:reqId,},req.body);
  res.json({
      status:'success',
      results:1,
      data:{
          review:rest,
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


const deleteReview =async(req, res)=>{
  try{
      const reqId = req.params.id;
      const data = {...req.body, reqId};
  const result = await reviewsModel.findByIdAndDelete({_id:reqId},data);
  res.json({
      status:'success',
      data:{
          reviews:result,
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
  addReview,
  getReview,
  editReview,
  deleteReview,
};