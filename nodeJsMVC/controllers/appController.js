exports.getParameters = (req,res)=>{
    const parameters = req.params;
    console.log(parameters);
    const querys = req.query;
    console.log(querys);
    // http://localhost:3000/bmw/arac/bursa/?ad=Cagatay
    res.render('parameter',{
        number:1001
    });
};

exports.get = (req,res)=>{
    res.render('index',{
        title: 'Title',
        description: 'Home Page',
        arr:[{id:1,name:'Cagatay'},{id:2,name:'Turkish'}]
    });
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