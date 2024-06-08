const mongoose=require('mongoose');

const reviewSchema=mongoose.Schema({
    userId: {
        type: String,
        unique: true,
        required: true,
    },
    description: String,
    images: [String],
    createdAt: {
        type: Date,
        default: new Date(),
    },
    updatedAt: {
        type: Date,
        default: new Date(),
    },
    productId:{
        type:String,
        required:true,
        unique:true,
    }
})

const reviewModel=mongoose.model('reviews',reviewSchema);

module.exports=reviewModel;