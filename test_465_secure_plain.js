const nodemailer = require('nodemailer');
var path = require('path');
var scriptName = path.basename(__filename);
var scriptDir = path.dirname(__filename);
var fs = require('fs');

var nodemailertransportparams = {
		host: process.env.SMTPSERVER,
		port: 465,
		secure: true,
		tls: {rejectUnauthorized: false}
}

var nodemailermailoptions = {
		from: process.env.FROM, // sender address
		to: [process.env.TO], // list of receivers
		subject: scriptName, // Subject line
		auth: {
				method: 'PLAIN',
				user: process.env.USERNAME,
				pass: process.env.PASSWORD
		}
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
