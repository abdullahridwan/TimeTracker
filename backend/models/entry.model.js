// basics

//everything in mongoose starts with a schema and thus we define one 
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const entrySchema = new Schema (
    {
    timeStart: {type: Number, required:true},
    timeEnd:{type: Number, required:true},
    duration:{type: Number, required:true},
    description:{type: String, required:true},
    date:{type: Date, required:true}
    }, {
        timestamps:true,
});

const entry = mongoose.model('Entry', entrySchema);
module.exports = entry;
