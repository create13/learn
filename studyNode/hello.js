// 创建一个http服务
var http = require('http');
http.createServer(function (request, response) {
	response.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'}) // 设置响应头
	if (request.url !== '/favicon.ico') { // 避免输出2次访问
		console.log('访问');
		response.write('hello world'); // 在浏览器中输出hello world
		response.end();	// 终止输出
	}
}).listen(8000); // 监听8000端口 在线上的时候 改为监听80端口
console.log('server is running 127.0.0.1:8000');
