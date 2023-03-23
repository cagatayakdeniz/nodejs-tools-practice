const url = require('url');
const myUrl = new URL("https://www.google.com.tr:8080/?searchQ=cagatay");

console.log('href:', myUrl.href);
console.log('pathname:', myUrl.pathname);
console.log('hash:', myUrl.hash);
console.log('hostname:', myUrl.hostname);
console.log('port:', myUrl.port);
console.log('protocol:', myUrl.protocol);

console.log('param:', myUrl.searchParams.get('searchQ'));
console.log('paramNotNull?:', myUrl.searchParams.has('searchQ'));