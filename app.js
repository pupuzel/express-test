import express from 'express';
import bodyParser from 'body-parser';
import router from './src/config/routes.js'
import interceptor from './src/config/interceptor.js'

const app = express()

app.listen(3000, () => {
    console.log('start express : 3000')
})

app.use(express.static('src/public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(interceptor)

app.set('view engine','ejs')

app.use('/',router)

/**************************************************************************************/
const http = require('http')
const WebSocket = require('ws')

var SocKetServer = http.createServer(app)
var wss = new WebSocket.Server({server : SocKetServer})

wss.on('connection', (ws) => {
    ws.send('Hi there, I am a WebSocket server');

    ws.on('message', (message) => {
        console.log('received: %s', message);
        
        wss.clients.forEach(function each(client) {
            if (client.readyState === WebSocket.OPEN) {
              client.send(message);
            }
        });
    });
});


SocKetServer.listen(3100, () => {
    console.log(`start SocKetServer`);
});



