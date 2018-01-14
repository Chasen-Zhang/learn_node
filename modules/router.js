//-----------------router.js--------------------------------
var  optfile  =  require('./optFile');
module.exports={
    login:function(req,res){
        function recall(data) {
            res.write(data);
            res.end('');
        }
       /* res.write("我是login方法");*/
        var data = optfile.readfile("./views/login.html",recall);
    },
    zhuce:function(req,res){
        function recall(data) {
            res.write(data);
            res.end('');
        }
       /* res.write("我是注册方法");*/
        var data = optfile.readfile("./views/zhuce.html",recall);
    },
    writefile:function (req,res) {
        function recall(data) {
            res.write(data);
            res.end('');
        }
        var data = optfile.writefile("./views/one.txt",'我的写入文件，今天阳光产蓝',recall);

    }
}