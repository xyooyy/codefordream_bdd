var all_data = {a: 123, b: 'hello', c: null, d: ['hello', 'world', '!']};
function get_type(data) {
    //在下一行添加代码，定义变量 type ，并将 参数 data 的类型值赋给 type。
    var type = typeof(data)

    var result = "该数据的类型是:" + type;
    console.log(result);
}
var choose = 'a';
get_type(all_data[choose]);