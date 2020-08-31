const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require('./models/User');
require('./models/Survey');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express(); // calling express as (a function) cuz might have several express.
//app is set up to configuration for incoming request from the node side

app.use(bodyParser.json());
app.use(
  cookieSession({
    //contain two property, maxage and encryption
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
); //tell express to use cookieKey

app.use(passport.initialize()); //tell passport to use cookies
app.use(passport.session());

require('./routes/authRoutes')(app); //valid. when 'Require' a file, returns a function
//(cuz app is preset as a function) (app) function is immediately called with the app object
require('./routes/billingRoutes')(app);//require statement turns into a object and immidiately call 'app'
//dynamic figuring out which port to listen to
//env --> environment variable sets in the underline run time that node is running on top of

require('./routes/surveyRoutes')(app);

if(process.env.NODE_ENV === 'production'){
  //Express will serve up production assets ex. main.js/main.css file
  app.use(express.static('client/build'));
  //Express will serve up the index.html file if does not recognize the route
  const path = require('path');
  app.get('*', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}
const PORT = process.env.PORT || 5000; // '||' or 5000
app.listen(PORT);
