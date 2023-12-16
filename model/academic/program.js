//rquiring mongoose 
const mongoose = require('mongoose');

//creating schema with destructuring 
const { Schema } = mongoose;

const ProgramSchema = new Schema(
    {
        name:{
            type:String,
            required:true
        },

        description:{
            type:String,
            required:true
        },

        duration:{
            type:Number,
            required:true,
            default:"4 years"
        },

        //code for generating registration number
        code:{
            type:String,
            default: function(){
                return(
                    this.name
                    .split(" ")
                    .map(name => name[0])
                    .join[""]
                    .toUpperCase()+
                    Math.floor(10 + Math.random() * 90)+
                    Math.floor(10 + Math.random() * 90)
                );
            },
        },

        CreatedBy: {
            type: Schema.Types.ObjectId,
            ref: "Admin",
            required:true,
        },
        
        //below three are the array reference of to particular documents 
        //Teachers associated with the program  
        teacher: [
            {
                type:Schema.Types.ObjectId,
                ref:"Teacher",
            },
        ],

        //students enrolled in the program 
        students: [
            {
                type:Schema.Types.ObjectId,
                ref:"student",
                default: [],
            }
        ],

        //subjects included in the program 
        subjects: [
            {
                type:Schema.types.ObjectId,
                ref: "subject",
                default: [],
            },
        ],
    },

    //automatically add the createdAt & updatedAt time stamps
    {
        timestamps:true
    }
)

//creating model with schema 
const Program = mongoose.model("Program", ProgramSchema);
module.exports = Program;

