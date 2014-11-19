var arr_string = ['下面是张三的个人信息：','\n','姓名：','张三','\n','年龄：','18'];
//完成字符串的拼接
var str_result = '';
for(var index in arr_string){
    str_result += arr_string[index];
}
console.log(str_result);