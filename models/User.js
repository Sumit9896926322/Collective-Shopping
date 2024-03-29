var mongoose= require('mongoose');

var userSchema= new mongoose.Schema({
    Username:{
        type:String,
        required:true,
        min:6,
        max:25
    },
    Useremail :{
        type:String,
        unique:true, 
        required:true
    },
    password:{
         type:String,
         required:true,
         min:3,
         max:255
        }

});

// var cartSchema = new mongoose.Schema({
//     product: {type: mongoose.Schema.Types.ObjectId,ref: 'Product'},
//     totalQty:{type: Number,default: 0},
//     totalPrice: {type: Number,default: 0},
//     items : Array,
//     user:{type: mongoose.Schema.Types.ObjectId,ref: 'User'}
// });

// var Cart = mongoose.model('cart',cartSchema);
var User =mongoose.model('myuser',userSchema);
module.exports =User;