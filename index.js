module.exports = followHandler = function (event) {
    console.log('new Follower: ' + event.source.userId);
    var text = event.message.text;
    var userID = event.source.userId;
    sendMessage(userID, 'Hey~ Thanks for Adding The NakamaStreamingCommunity API Bot!');
}