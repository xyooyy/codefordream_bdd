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
var highest_score = all_scores[0][0];
//使用for循环求这10名学生中所有科目的最高分
for(var i = 0; i < all_scores.length; i ++)
{
    for(var j = 0; j < all_scores[i].length; j ++)
    {
        if(highest_score < all_scores[i][j])
        {
            highest_score = all_scores[i][j];
        }
    }
}
//打印这10名学生所有科目的最高分
console.log('这10名学生所有的最高分为：'+highest_score);