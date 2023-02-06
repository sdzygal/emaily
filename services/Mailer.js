const sendgrid = require('sendgrid');
const helper = sendgrid.mail; //helps create a mailer
const keys = require('../config/keys');

class Mailer extends helper.Mail {

}

module.exports = Mailer;