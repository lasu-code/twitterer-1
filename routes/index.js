var express = require('express');
var router = express.Router();
let tweetController = require('../controllers/tweetControllers.js');

/* GET home page. */
router.get('/', tweetController.home);

router.get('/tweets', tweetController.tweet)

router.post('/tweets', tweetController.tweet)


router.get('/tweets/followers', tweetController.followers)

router.post('/comment', tweetController.comment)

router.get('/comment', tweetController.commentTweet)




module.exports = router;


