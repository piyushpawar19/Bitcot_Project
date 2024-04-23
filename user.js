const mongoose= require('mongoose')
//firstName, lastName, email, password, createdAt, updatedAt
const userSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastname:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
        minLenght:5,
        
    },
    confirmPassword:{
        type:String,
        required:true,
        minLenght:5,
        validate:{
            validator:function(value){
                return value===this.password;
            },
            message:'password do not match'
        }
    },
    createdAt:{
        type:Date,
        default:Date.now,
    },

})

const User=mongoose.model('User',userSchema);

module.exports = User;