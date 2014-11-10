var app = require('../index.js'),
    auth = require('./auth.js'),
    email = require('./email_server.js');

//DEFINE MIDDLEWARE
app.use(express.static(__dirname + '/../client/html'));

app.use('/index', function(req, res, next) {
  if(!auth.isValid) {
    res.sendFile('/login.html');
  }
  next();
});

// DEFINE ROUTES
app.get('/', function(req, res) {
  res.redirect('/index');
});

app.get('/index', function(req, res) {
  res.redirect('http://www.jlowinske.com');
});

app.route('/login')
  .get(function(req, res) {
    res.sendFile('login.html');
  })
  .post(function(req, res) {
    console.log('req: ', req);
  });

//TODO TODO TODO TODO TODO
app.route('/signup')
  .get(function(req, res) {
    res.sendFile('signup.html');
  })
  .post(function(req, res) {
    console.log('req: ', req);
    auth.createUser(EMAILEMAILEMAIL, PASSPASSPASS);
  });

app.get('/signup/facebook', function(req, res) {
  res.sendFile('signup_facebook.html');
});

app.get('/signup/twitter', function(req, res) {
  res.sendFile('signup_twitter.html');
});

//TODO TODO TODO TODO TODO
app.route('/authFB')
  .get(function(req, res) {
    auth.authFacebook()
  })
  .post(function(req, res) {
    console.log('req: ', req);
    auth.authFacebook(EMAILEMAILEMAIL);
  });

//TODO TODO TODO TODO TODO
app.route('/authTwitter')
  .get(function(req, res) {
    auth.authTwitter()
  })
  .post(function(req, res) {
    console.log('req: ', req);
    auth.authTwitter(EMAILEMAILEMAIL);
  });

//TODO TODO TODO TODO TODO
app.route('/reset')
  .get(function(req, res) {
    res.sendFile('reset_1.html');
  })
  .post(function(req, res) {
    console.log('req: ', req);
    auth.resetPassword(EMAILEMAILEMAIL, OLDPASS, NEWPASS);
  });

app.get('/logout', function(req, res) {
  auth.logout();
  res.redirect('/login');
});
