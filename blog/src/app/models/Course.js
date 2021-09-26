const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
var slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Course = new Schema({
  name:{type: String, required:true},
  description:{type: String, maxlength:255},
  image:{type: String, maxlength:255},
  slug:{type:String, slug:'name',unique:true},
  videoId:{type:String,required:true},
  level:{type:String, maxlength:255},
},{
  timestamps:true,
});

module.exports = mongoose.model('Course',Course);