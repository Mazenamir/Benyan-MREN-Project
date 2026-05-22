// ALl the Super admin related data will be stored in this model
//eplaination for this model : this model will be used to store the data of the super admin who will have all the privileges to manage the application . this model will have the following fields :
// 1. username : this field will store the username of the super admin . it is required and unique .
// 2. email : this field will store the email of the super admin . it is required and unique .
// 3. password : this field will store the password of the super admin . it is required and must be at least 6 characters long .

// this model will also have a pre save hook to hash the password before saving it to the database and a method to compare the password for login purposes .


// this model will be used in the auth controller to create a super admin and to login the super admin . 
// it will also be used in the auth middleware to protect the routes that only the super admin can access .

const mongoose = require("mongoose") ;

const bycpt = require("bcrypt") ;

const AdminSchema = new mongoose.Schema({

    username : {
        type : String ,
        required : [true , "username is required"] ,
        unique : true
    } ,
    email : {
        type : String ,
        required : [true , "email is required"] ,
        unique : true
    } ,
    password : {
        type : String ,
        required : [true , "password is required"] ,
        minlength : [6 , "password must be at least 6 characters long"]
    },
} ,
 {timestamps: true})


 //hooks
    AdminSchema.pre("save" , async function (next) {
        if (!this.isModified("password")) return next() ;
        const salt = await bcrypt.genSalt(10) ;
        this.password = await bcrypt.hash(this.password , salt) ;
        next() ;
    }) ;

    AdminSchema.method.comparePassword = async function (matchedPassword) {
        return await bcrypt.compare(matchedPassword , this.password) ;
    } ;

    const Admin = mongoose.model("Admin" , AdminSchema) ;

    module.exports = Admin ;