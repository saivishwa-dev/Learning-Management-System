//requiring mongoose 
const mongoose = require("mongoose");

//creating a schema 
// const { Schema } = mongoose ; 

const AcademicYearSchema= new mongoose.Schema(
    {
        name:{
            type:string,
            required: true,
        },

        fromYear:{
            type: Date,
            required:true,
        },

        toYear:{
            type:Date,
            required:true,
        },

        isCurrent:{
            type:Boolean,
            default:false,
        },

        //reference from the admin model 
        createdBy:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Admin",
            required:true,
        },

        //array object for student reference
        students: [
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:"Student"
            }
        ],

        //array object for teacher reference
        Teacher:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref: "Teacher",
            }
        ],
        //Finance 
        //Librarian
        //..
    },

    //to get the updates of createAt & updatedAt
    {
        timestamps:true
    }
)

//creating the model 
const Academic = mongoose.model("Academic", AcademicYearSchema);

//exporting model
modules.exports = Academic;