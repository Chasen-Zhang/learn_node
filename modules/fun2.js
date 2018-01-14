/*
function  fun2(res) {
    console.log('我是fun2');
    res.write('你好，我是fun2');
}
*/

//module.exports  =fun2;


module.exports={
    fun2:function(res){
        console.log('我是fun2');
        res.write('你好，我是fun2');
    },
    fun3:function (res) {
        res.write('我是第三个函数');
    }
}

/*//支持多个函数
module.exports={
    getVisit:function(){
    return  visitnum++;
    },
    add:function(a,b){
    return  a+b;
    }
}  */