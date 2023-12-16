//requiring mongoose 
const mongoose  = require("mongoose");

//creating schema using destructuring process
const { Schema } = mongoose 
const ClassLevelSchema = new Schema(
    {
        name: {
            type:String,
            required:true
        },

        description:{
            type:String,
            required:true,
        },

        //reference from admin model 
        CreatedBy: {
            type:Schema.Types.ObjectId,
            ref:"Admin",
            required:"true",
        },

        //reference array from students model  
        students: [
            {
                type:Schema.Types.ObjectId,
                ref: "Student",
            }
        ],

        //reference array from subjects model 
        subjects: [
            {
                type:Schema.Types.ObjectId,
                ref:"subject"
            }
        ],

        //reference array from teacher model
        teachers: [
            {
                type:Schema.Types.Objectid,
                ref:"Teacher",
            },
        ],
    },

    //timestamps used to get info of createdAt and updated At 
    {
        timestamps:true
    }
);

//creating a model 
const ClassLevel = mongoose.model("ClassLevel",ClassLevelSchema);
//exporting modle 
module.exports = ClassLevel;