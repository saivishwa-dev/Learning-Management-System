//requiring the mongoose 
const mongoose = require('mongoose');
//creating a schema "schema can be simply defined as a bluprint or a structure of database has to be"
const admminSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },

        email:{
            type:String,
            required:true
        },
        
        password:{
            type:String,
            required:true
        },

        role:{
            type:String,
            default:"admin",
        },
    },
    {
        timestamps:true
    }
);

//based on schema creating a model 
const Admin = mongoose.model("Admin", admminSchema);

//exporting the admin schema 
module.exports = Admin;