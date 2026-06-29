const mongoose = require('mongoose');

const menuSchema =new mongoose.Schema({
   name:{type:String,
   required:true,},
   price:{
    type:Number,
    required:true
   },
   taste:{
    type:String,
    enum:['sweet','spicy','sour'],

   },
   is_Drink:{
    type:Boolean,
    default:false
   }

})

const menuItems = mongoose.model('menuItems',menuSchema)
module.exports=menuItems;
