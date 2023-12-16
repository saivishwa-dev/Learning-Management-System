//requiring mongoose 
const mongoose = require('mongoose');

//creating a schema 
// const { Schema } = mongoose;

const subjectSchema = new mongoose.Schema(

    {
        name:{
            type:String,
            required:true,
        },

        description:{
            type:String,
            required:true,
        },

        //reference of teachers 
        teacher: {
            type:Schema.Types.ObjectId,
            ref:"Teacher",
        },

        //reference of academic term 
        academicTerm:{
            type:Schema.Types.ObjectId,
            ref:"Acedemic Term",
            required: true,
        },

        //reference of created by 
        CreatedBy:{
            type:Schema.Types.ObjectId,
            ref:"Admin",
            required:true
        },

        duration:{
            type:String,
            required:true,
            default:"3 years"
        }
    },

    //timestamps will give you the details about createAt & updatedAt
    {
        timestamps: true
    }
);

//creating the model 
const Subject = mongoose.model("Subject", subjectSchema);
//exporting module 
module.exports = Subject