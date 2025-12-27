import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true    
    },
    pNo:{
        type:Number,
        require:true
    },
    bottleName:{
        type:String,
        require:true
    },
    quantity:{
        type:Number,
        require:true
    },
    price:{
        type:Number,
        require:true
    }
},{timestamps:true}) 
const uSchema = mongoose.model("UserCheckOutData",userSchema);
export default uSchema;