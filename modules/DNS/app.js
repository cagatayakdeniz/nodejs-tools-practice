const dns = require('dns');
const os = require('os');

dns.resolve('google.com',(err,adress)=>{
    console.log('adress:',adress);
});

console.log('LocalIP:',dns.getServers());

dns.lookup(os.hostname(),(err,add,fm)=>{
    console.log('address: ',add);
    console.log('family:',fm);
})