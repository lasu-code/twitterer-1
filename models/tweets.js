let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let TweetSchema = new Schema({  
    body: String,
    user: String, 
    createdDate: {type: Date, default: Date.now }
})

module.exports = mongoose.model('Tweet', TweetSchema);