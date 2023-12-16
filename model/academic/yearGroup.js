//requiring mongoose 
const mongoose = require("mongoose");

//creating a schema 
const YearGroupSchema = new mongoose.Schema(
    {
        name: {
            type:"string",
            required: true
        },

        //reference from the admin model 
        createdBy:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Admin",
            required:true
        },

        //refernce from the AcademicYear model 
        academicYear:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"AcademicYear",
            required:true
        },
    },

    //timestamps used for getting info of (createdAt & updatedAt )
    {
        timestamps: true
    }
)

//creating a model 
const YearGroup = mongoose.model("YearGroup", YearGroupSchema);

//exporting model 
module.exports = YearGroup;