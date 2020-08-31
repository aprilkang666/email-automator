const passport = require('passport');

module.exports = (app) => {
  //app is the express library
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email'],
    })
  );
  //route handler for google callback, turning in with the code for the actual user profile
  app.get(
    '/auth/google/callback', 
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/surveys');
    }
    );
  //'google' is the internal identifier for GoogleStrategy
  //new GoogleStrategy create new instance`
  //passport.use --> generic register

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  //route to handle cookies
  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};

//
