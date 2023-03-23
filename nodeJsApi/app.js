const express = require('express');
const router = express.Router();
const app = express();
app.use(express.json());
app.use(router);

const data = [
    {
        id:1,
        name:'Turkiye'
    },
    {
        id:2,
        name:'Germany'
    },
    {
        id:3,
        name:'England'
    }
]

router.get('/',(req,res)=>{
    res.send(data);
});

router.post('/',(req,res)=>{
    console.log(req.body);
    const body = req.body;
    data.push(body);
    res.send(body);
});

router.delete('/:id',(req,res)=>{
    const id = req.params.id;

    const selectedData = data.filter(x=>x.id==id);
    data.splice(selectedData[0].id - 1,1);

    res.send(`${id} deleted.`);
});

router.put('/:id',(req,res)=>{
    const id = req.params.id;
    const body = req.body;

    const selectedData = data.filter(x=>x.id==id);
    console.log(selectedData[0].id);
    data.splice(selectedData[0].id - 1,1,body);

    res.send(`${id} updated.`);
});

app.listen(3000,()=>{
    console.log("Server running at: http://localhost:3000");
})