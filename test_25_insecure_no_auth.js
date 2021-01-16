const nodemailer = require('nodemailer');
var path = require('path');
var scriptName = path.basename(__filename);
var scriptDir = path.dirname(__filename);
var fs = require('fs');

var nodemailertransportparams = {
		host: process.env.SMTPSERVER,
		port: 25,
		ignoreTLS: true
}

var nodemailermailoptions = {
		from: process.env.FROM, // sender address
		to: process.env.TO, // list of receivers
		subject: scriptName
}

var transporter = nodemailer.createTransport(
			nodemailertransportparams
		);
	
fs.readFile(scriptDir + '/' + scriptName, 'utf8', function(err, contents) {	
	var mailOptions = nodemailermailoptions

	mailOptions.text = contents.toString();

	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			console.log(error);
		} else {
			console.log('success');
		}
	});
});
