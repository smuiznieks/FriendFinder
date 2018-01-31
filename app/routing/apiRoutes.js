// Import data
var friends = require('../data/friends.js');

// Routing
function apiRoutes(app) {
    // Display API friend list
    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });
    // Add profile to friend list and compatibility logic
    app.post('/api/friends', function (req, res) {
        var scoreArray = [];
        for (var i = 0; i < friends.length; i++) {
            var compatibility = 0;
            for (var j = 0; j < 10; j++) {
                var compareScore = Math.abs(parseInt(friends[i].scores[j]) - parseInt(req.body['scores[]'][j]));
                compatibility += compareScore;
            }
            scoreArray.push(parseInt(compatibility));
        }
        console.log(scoreArray);
        Array.min = function( scoreArray ){
            return Math.min.apply( Math, scoreArray );
        };
        var closestScore = Array.min(scoreArray);
        console.log(closestScore);
        bestMatch = scoreArray.indexOf(closestScore);
        friends.push(req.body);
        res.json(friends[bestMatch]);
    });
};

module.exports = apiRoutes;