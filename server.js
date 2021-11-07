//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
// app.use(express.static(__dirname + '/dist/eauservicedebebe/server/main.js'));

app.get('/*', function(req,res) {
  app.use(express.static(__dirname + '/dist/eauservicedebebe/server/main.js'));
  // res.sendFile(path.join(__dirname+'/dist/eauservicedebebe/server/main.js'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 3001);

console.log('serveur lancé')