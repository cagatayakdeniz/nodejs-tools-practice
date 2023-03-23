const fs = require('fs');

fs.writeFile('test.txt','Merhaba Dünya',(err)=>console.log(err)); // Dosya aç ve veriyi ekle
fs.writeFileSync('test2.txt','Merhaba Dünya',(err)=>console.log(err)); // Dosya aç ve veriyi ekle

fs.appendFile('test.txt','\nSelam',(err)=>console.log(err)); // Dosyaya Veri Ekle

fs.copyFile('test.txt','kopya.txt',()=>{}); // Kopyala ve dosyaya yaz

fs.open('test.txt','w',(err)=>console.log('dosya açıldı'));
fs.readFile('test.txt',(err,data)=>{
    console.log('index\n',data.toString());
})

// fs.unlink('kopya.txt',(err)=>console.log(err)); // Dosyayı sil

// fs.rename('kopya.txt','guncelAd.txt',(err)=>console.log(err)); // Dosya Ad değiştirme

// fs.opendir('./',async(err,data)=>{
//     for await (const d of data)
//     console.log('name',d.name,'isFile',d.isFile(),'isDirec',d.isDirectory());
// })