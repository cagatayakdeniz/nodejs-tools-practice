const moment = require('moment');

moment.locale('tr'); 

console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
console.log(moment().format('L'));
console.log(moment().format('LL'));
console.log(moment().format('LLL'));
console.log(moment().format('LLLL'));