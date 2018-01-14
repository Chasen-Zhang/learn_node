//----------------------n3_modalcall.js-------------
var    http  =    require('http');
/*var  User  =  require('./modules/User');*/
var  Teacher  =  require('./modules/Teacher');
http.createServer(function        (request,response)        {
    response.writeHead(200,        {'Content-Type': 'text/html;charset=utf-8'});
    if(request.url!=="/favicon.ico"){        //清除第2此访问
       // user  =  new  User(1,'张森',20);
        var teacher = new Teacher(1,'dhhh',20)
        teacher.enter();
        teacher.teach(response);
        response.end('');
    }
}).listen(8000);
console.log('Server        running        at        http://127.0.0.1:8000/');