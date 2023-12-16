//requiring mongoose 
const mongoose  = require("mongoose");

//creating schema with destructuring
const { Schema } = mongoose; 
const AcademicTermSchema = new Schema(
    {
        name: {
            type:String,
            required:true
        },

        description:{
            type:String,
            required:true
        },

        duration:{
            type:String,
            required:true,
            default: "3 months"
        },

        //reference from admin model 
        createdBy:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Admin",
            required:true
        },
    },

    //timesstamps will update the createAt & updatedAt info
    {
        timestamps: true
    },
);

//creating model 
const AcademicTerm = mongoose.model("AcademicTerm",AcademicTermSchema);
//exporting model 
module.exports = AcademicTerm;