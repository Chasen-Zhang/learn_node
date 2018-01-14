var  http  =  require('http');
var  optfile  =  require('./modules/optFile');
http.createServer(function  (request,  response)  {
    response.writeHead(200,  {'Content-Type':  'text/html;  charset=utf-8'});
    if(request.url!=="/favicon.ico"){  //清除第2此访问
        console.log('访问');

        //var data = optfile.readfileSync("./views/login.html");

        function recall(data) {
            response.write(data);
            response.end('ok');
        }
        var data = optfile.readfile("./views/login.html",recall);

        //response.end('');//不写则没有http协议尾

        console.log('主程序执行完毕');
    }
}).listen(8000);
console.log('Server  running  at  http://127.0.0.1:8000/');