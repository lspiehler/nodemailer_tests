# nodemailer_tests
## Clone Git Repo
```
git clone https://github.com/lspiehler/nodemailer_tests.git
cd nodemailer_tests
```
## Install Dependencies
```
npm install
```
## Set Environment Variables
Linux example
```
export FROM='"from user" <from.user@example.com>'
export TO=to.user@example.com
export USERNAME=emailuser
export PASSWORD=emailpass
export SMTPSERVER=smtp.server.com
```
Windows example
```
set FROM="from user" ^<from.user@example.com^>
set TO=to.user@example.com
set USERNAME=emailuser
set PASSWORD=emailpass
set SMTPSERVER=smtp.server.com
```
## Run tests
```
node test_25_insecure_login.js
node test_25_insecure_no_auth.js
node test_25_insecure_plain.js
node test_25_secure_login.js
node test_25_secure_no_auth.js
node test_25_secure_plain.js
node test_465_secure_login.js
node test_465_secure_no_auth.js
node test_465_secure_plain.js
node test_587_tls_login.js
node test_587_tls_no_auth.js
node test_587_tls_plain.js
```