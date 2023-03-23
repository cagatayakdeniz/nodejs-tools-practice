const express = require('express');
const router = express.Router();

const appController = require('../controllers/appController')

router.get('/:markaAdi/arac/:sehir',appController.getParameters)

router.get('/',appController.get);

router.post('/',appController.post);

router.put('/',appController.put);

router.delete('/',appController.delete);

router.use((req,res)=>{
    res.status(404).json({message:'Sayfa Bulunamadı'});
});

module.exports = router;