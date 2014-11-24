//10名同学的各科的成绩 请勿修改此句
var all_scores = [[131,143,144],
    [131,135,144],
    [127,139,142],
    [123,148,136],
    [126,135,140],
    [129,133,138],
    [116,143,140],
    [114,142,139],
    [115,139,135],
    [116,142,129]];
//使用for循环统计10名同學的各科成绩，并求平均分
var sum_scores = 0;
//添加for循环语句
for(var i = 0 ; i < all_scores.length; i ++)
{
    for(var j = 0; j < all_scores[i].length; j ++)
    {
        sum_scores += all_scores[i][j];
    }
}
//求这10名同学每科的平均分数
var average_score = sum_scores / (all_scores.length * 3);
console.log('这10名学生的平均成绩为：'+average_score);