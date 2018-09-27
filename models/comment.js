let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let CommentSchema = new Schema({  
    comment: String,
    user: String, 
    createdDate: {type: Date, default: Date.now }
})

module.exports = mongoose.model('Comment', CommentSchema);