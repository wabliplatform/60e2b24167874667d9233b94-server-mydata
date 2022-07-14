
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vprojectsSchema = new Schema({
Underscoreid:String , 


prName:String , 


prSDate:Date , 


prEDate:Date , 


prFunding:Number 



})

module.exports = {
  Vprojects : mongoose.model('vprojects', vprojectsSchema),
}

