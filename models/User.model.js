import { Schema, model } from "mongoose";

const userSchema = new Schema({
    userName:{
        type:String,
        required:true,
    },
    password : {
        type:String,
        require:true
    },
    age:{
        type:Number,
    },
    confirmEmail:{
        type:Boolean,
        default:false,
    },
    gender:{
        type :String,
       // female, fe male, fe_male
       enum:['Male','Female'],
       default:'Male'
    }
},{
    timestamps:true, // add create at and update at
});

const userModel = model('User',userSchema)

export default userModel;