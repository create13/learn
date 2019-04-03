var http = require('http');
var otherFun = require('./module/anotherFun.js');
http.createServer((request, response) => {
	response.writeHead(200, {'Content-type': 'text/html; charset=utf-8'})
	if (request.url !== 'favicon.ico') {
		otherFun.anotherFun(response);
		// otherFun['anotherFun'](response); // 用字符串调用对应的函数
		response.end();
	}
}).listen(8000)
function testData (res) {
	console.log('testData');
	res.write('testData');
}