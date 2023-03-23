const path = require('path');

console.log('extName:',path.extname('C:\\Users\\cagat\\OneDrive\\Belgeler\\nodejsProfessional\\modules\\path\\app.js'));

console.log('dir:',path.dirname('C:\\Users\\cagat\\OneDrive\\Belgeler\\nodejsProfessional\\modules\\path\\app.js'));

console.log('base:',path.basename('C:\\Users\\cagat\\OneDrive\\Belgeler\\nodejsProfessional\\modules\\path\\app.js'));

const pathFormat = path.format({
    root: 'C:\\deneme\\cagatay\\',
    name:"test",
    ext: ".txt"
});
console.log('format:',pathFormat);

console.log('join:',path.join('/abc','a','cagatay','merhaba'));

console.log('parse:',path.parse('C:\\Users\\cagat\\OneDrive\\Belgeler\\nodejsProfessional\\modules\\path\\app.js'));
