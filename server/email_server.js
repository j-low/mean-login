var mandrill = require('mandrill-api/mandrill'),
    mandrill_client = new mandrill.Mandrill('plXLrmWNb8Sixy1voWhsbQkxUQxsB7KQVdcYoHrI'),
    db = require('./db.js'),
    auth = require('./auth.js');

var message = {
    "html": "<p>Welcome to BestAppEverInHistory!</p>",
    "text": "Thank you for signing up to BestAppEverInHistory! Soon your friends will find you more interesting, romantic interests will rate you as more attractive and you will accumulate grotesque levels of wealth and resources!",
    "subject": "Welcome to BestAppEverInHistory!",
    "from_email": "lowi0008@gmail.com",
    "from_name": "Joe",
    "to": [{
            "email": "",
            "name": "",
            "type": "to"
        }],
    "headers": {
        "Reply-To": "message.reply@example.com"
    },
    "important": false,
    "track_opens": null,
    "track_clicks": null,
    "auto_text": null,
    "auto_html": null,
    "inline_css": null,
    "url_strip_qs": null,
    "preserve_recipients": null,
    "view_content_link": null,
    "tracking_domain": null,
    "signing_domain": null,
    "return_path_domain": null,
    "merge": true,
    "merge_language": "mailchimp",
  };

module.exports = {
  sendWelcomeEmail : function() {
  }
};
