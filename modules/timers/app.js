const timers = require('timers');

timers.setInterval(()=>{
    console.log(Date.now())
    console.log(new Date);
    console.log("||");
}, 1000);

timers.setTimeout(()=>{
    console.log('After 3 second run');
},3000);

console.log('merhaba');
timers.setImmediate(()=>{
    console.log('Last run'); // Programda Time kısmına gelene kadar en son çalışan yer.
})
console.log('merhaba 2');