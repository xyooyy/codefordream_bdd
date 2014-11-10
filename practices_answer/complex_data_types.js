var name = profile["姓名"];  //将对象 profile 中你 "姓名" 的值取出,赋给变量 name。
var college = profile["学校"];
var id = profile["学号"];
var major = profile["专业"];

// 请用上面定义好的变量，按先后顺序将下一行数组的内容补齐。
var my_profile = [ name, college, id, major];

//下一行代码将数组 my_profile 中的数据取出，拼接成一个句子，在控制台(console)中输出出来。
console.log( my_profile[0] + "是一名来自" + my_profile[1] + my_profile[3] + "专业的学生，在该学校内的编号是" + my_profile[2] + "。");