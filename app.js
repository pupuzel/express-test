import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

const __dirname = path.resolve();
const app = express()

app.listen(3000,function(){
    console.log('hi hi')
})

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine','ejs')

app.get('/',(req,res) =>{
    res.sendFile(__dirname+'/public/main.html')
})


app.post('/check_out',(req,res) =>{
    res.render('index.ejs',{'key' : req.body.keycode})
})

app.post('/save/key',(req,res) =>{
    console.log(req.body)
    res.send('success')
})