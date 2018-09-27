let Comment = require('../models/comment');
let Tweet = require('../models/tweets');
const mongoose = require('mongoose');
// const Tweet = mongoose.model('Tweet');

let userTweets = [
    {
        body: 'My first tweet',
        user: 'Opeoluwa ',
        date: new Date 
    },
    {
        body: 'My second tweet',
        user: 'Opeoluwa ',
        date: new Date 
    },
    {
        body: 'My third tweet',
        user: 'Opeoluwa ',
        date: new Date 
    },
]

let opeFollowers = [{
    name: 'Master P',
    img: "/public/images/img1.jpg"
},

{
name: 'Decemotee',
img: "/public/images/img2.jpg"
},

{
name: 'Main Jeo',
img: "/public/images/img3.jpg"
}

]

exports.home= function(req, res, next) {
  res.render('index', { title: 'Express' });
}

exports.tweet = function(req, res, next){
console.log(req.body)
let  tweet = {
    body: req.body.tweet,
    user: req.body.username
}
let data =new Tweet(tweet);

data.save();
res.redirect('/');

//   res.render('tweets', {title: 'OPE TWEETS', sub: 'Awesome tweets', tweet: userTweets })
}


exports.profile = function(req, res, next){
  res.render('profile', {title: 'My tweets', username: req.params.name})
}

exports.followers = function(req, res, next){
    res.render('followers', {title: " Ope's Followers",  follow: opeFollowers} )
}

exports.comment = function(req, res, next){
    console.log(req.body);
    let myComment = {
        user: req.body.user,
        comment: req.body.comment
    }

    let data = new Comment(myComment);
    data.save();
    res.redirect('/comment');
}

exports.commentTweet = function(req, res, next){
    Comment.find({}).then(function(result){
        console.log(result)
        res.render('comment', {comment: result})
    })
    
    
}