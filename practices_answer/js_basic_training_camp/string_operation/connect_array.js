var stu_info = ['王雪','的','英语','成绩','是：','131','分'];
var str_stu_info = '';
//将数组中的字符串按顺序连接成一句话。
for(var i = 0; i < stu_info.length; i ++)
{
    str_stu_info = str_stu_info + stu_info[i];
}
//打印连接后的字符串
console.log('拼接后的字符串为：'+str_stu_info);