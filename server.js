// Import routes
var apiRoutes = require('./app/routing/apiRoutes.js');
var htmlRoutes = require('./app/routing/htmlRoutes.js');

// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Express
var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routing
apiRoutes(app);
htmlRoutes(app);

// Listener
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});