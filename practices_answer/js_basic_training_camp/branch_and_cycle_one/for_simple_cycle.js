//变量scores存储的是某学生语文、数学、英语三科的成绩
var scores = [131,142,144];
//使用for循环统计各科成绩，并求平均分
var sum_scores = 0;
//添加for循环语句
for(var i = 0; i < scores.length; i ++)
{
    sum_scores += scores[i];
}
//求三科的平均分数
var average_score = sum_scores / scores.length;
console.log('三科的平均成绩为：'+average_score);