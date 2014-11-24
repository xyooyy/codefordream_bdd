//下面是某班一学生的成绩详情
var stu_score = {'杨璐':[131,143,144]};
//拼接字符串,使打印结果为：杨璐成绩单\语文：131\n数学：143\n英语：144
var str_log_scores = '杨璐成绩单：'+'\n'+'语文：'+stu_score['杨璐'][0]+'\n'+'数学：'+stu_score['杨璐'][1]+'\n'+'英语：'+stu_score['杨璐'][2];
//打印学生的成绩单
console.log(str_log_scores);