var express = require ('express');
var app = express();
var server= require('http').createServer(app);
var io=require('socket.io').listen(server);
var cons= require('consolidate');

server.listen(3000);
app.engine('.html',cons.jade);
app.set('view engine','html');

app.use(express.static('./public'));

app.get('/',function (req,res) {
	res.render('index', { titulo: 'Batalla Escolar'});
});

function conectar(socket){
	console.log('Nuevo usuario conectado Nyan nyan nyan nyan XD');
	socket.on('pintar',function  (data) {
		socket.broadcast.emit('pintar',data);
	});
}

io.sockets.on('connection',conectar);