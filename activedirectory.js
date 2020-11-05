var ActiveDirectory = require('activedirectory');
var config = { url: 'ldap://dc.domain.com',
               baseDN: 'dc=domain,dc=com',
               username: 'username@domain.com',
               password: 'password' }
var ad = new ActiveDirectory(config);
var username = 'urbalyon\doreem';
var password = 'Magico13';

ad.authenticate(username, password, function(err, auth) {
  if (err) {
    console.log('ERROR: '+JSON.stringify(err));
    return;
  }

  if (auth) {
    console.log('Authenticated!');
  }
  else {
    console.log('Authentication failed!');
  }
});