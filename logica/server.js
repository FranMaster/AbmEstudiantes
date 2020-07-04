const express=require('express');
const bodyParser=require('body-parser');
let app =express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false })); 
// parse application/json
app.use(bodyParser.json());

let arrayUsuarios=[];

app.use(express.static(__dirname+'/public'));

app.get('/',(req,res)=>{ 
     res.send('Bienvenido');
});

app.post('/addUser',(req,res)=>{
    let usuario=req.body;
    arrayUsuarios.push(usuario);
    res.status(200).json({
        mensaje:'ok',
        data:arrayUsuarios
    });
});



app.listen(3000,()=>{
    console.log('Escuchando por puerto 3000');
})