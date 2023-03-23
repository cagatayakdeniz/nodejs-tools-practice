exports.getParameters = (req,res)=>{
    const parameters = req.params;
    console.log(parameters);
    const querys = req.query;
    console.log(querys);
    // http://localhost:3000/bmw/arac/bursa/?ad=Cagatay
    res.sendFile('C:\\Users\\cagat\\OneDrive\\Belgeler\\nodejsProfessional\\ExpressJsRouter' + '/parameter.html');
};

exports.get = (req,res)=>{
    res.sendFile('C:\\Users\\cagat\\OneDrive\\Belgeler\\nodejsProfessional\\ExpressJsRouter' + '/index.html');
};

exports.post = (req,res)=>{
    res.status(201).json({message:'Başarılı'});
};

exports.put = (req,res)=>{
    res.status(201).json({message:'Başarılı'});
};

exports.delete = (req,res)=>{
    res.status(201).json({message:'Başarılı'});
}