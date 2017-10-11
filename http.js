var router = require ('./router');

var app = router(3000);

var contatos = [
	{nome: "Pedro", telefone: "9999-8888", data : new Date(), operadora : {nome: "Oi", codigo : 14, categoria : "Celular"} ,cor : "blue" },
	{nome: "Thiago", telefone: "9999-7777", data : new Date(), operadora : {nome: "Vivo", codigo : 15, categoria : "Celular"}, cor : "red"},
	{nome: "João", telefone: "9999-6666", data : new Date(), operadora : {nome: "Tim", codigo : 11, categoria : "Celular"}, cor : "black"},
	{nome: "André", telefone: "9999-5555", data : new Date(), operadora : {nome: "GVT", codigo : 25, categoria : "Fixo"}, cor : "orange"}
];

var operadoras = [
	{nome: "Oi", codigo: 14, categoria: "Celular", preco : 2},
	{nome: "Vivo", codigo: 15, categoria: "Celular", preco : 3}, 
	{nome: "Tim", codigo: 11, categoria: "Celular", preco : 1},
	{nome: "Claro", codigo: 41, categoria: "Celular", preco : 4},
	{nome: "GVT", codigo: 25, categoria: "Fixo", preco : 6},
	{nome: "Embratel", codigo: 21, categoria: "Fixo", preco : 7}
];

app.interceptor(function (req, res, next){
	console.log('executando interceptor 1');
	res.setHeader('Access-Control-Allow-Origin','*');
	res.setHeader('Access-Control-Allow-Headers','Content-Type');
	next();
});

app.interceptor(function (req, res, next){
	console.log('executando interceptor 2');
	res.setHeader('Content-Type','application/json;charset=UTF-8');
	next();
})

app.get('/contatos', function (req, res){
	res.write(JSON.stringify(contatos));
	res.end();
});

app.get('/operadoras', function (req, res){
	res.write(JSON.stringify(operadoras));
	res.end();
});

app.post('/contatos', function (req, res){
	var contato = req.body;
	console.log(contato);
	contatos.push(JSON.parse(contato));
	res.end();
});

app.options('/contatos', function (req, res){
	res.end();
});