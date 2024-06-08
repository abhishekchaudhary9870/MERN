
const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    
        first_name:{
            type:String,
            required:true,
            
        
        last_name:{
            type:String,
            required:true,
            
        },
    },
    age:{
        type:Number,
    },
    userId:{
        
    }
   
    
    
    
})

const userModel = mongoose.model('user',userSchema)
module.exports = userModel;