const process = require('process');

process.on('beforeExit',() => {
    console.log("beforeexit");
});
process.on('exit',()=>{
    console.log("exit");
});
process.on('SIGINT',()=>{
    console.log("kullanıcı kapatmaya çalışıyor");
    process.exit();
});
setInterval(()=>{
    console.log(1);
},1000);
console.log("selam");

console.log('arch',process.arch);
console.log('argv',process.argv);
console.log('platform',process.platform);
console.log('pid',process.pid);
console.log('cpuUsage',process.cpuUsage());
console.log('title',process.title);
console.log('version',process.version);
console.log('env',process.env);