var  http  =  require('http');
var  optfile  =  require('./modules/optfile');
http.createServer(function  (request,  response)  {
    //response.writeHead(200,  {'Content-Type':  'text/html;  charset=utf-8'});
    response.writeHead(200,  {'Content-Type':'image/jpeg'});
    if(request.url!=="/favicon.ico"){  //清除第2此访问
        console.log('访问');
        //response.write('hello,world');//不能向客户端输出任何字节
        optfile.readImg('./images/pig.png',response);
        //------------------------------------------------
        console.log("继续执行");
        //response.end('hell,世界');//end在方法中写过
		
		console.log(4);
		console.log(89);
		console.log('test2');
		//Signed-offooo000099999idfoidofiodf
    }
}).listen(8000);
console.log('Server  running  at  http://127.0.0.1:8000/');