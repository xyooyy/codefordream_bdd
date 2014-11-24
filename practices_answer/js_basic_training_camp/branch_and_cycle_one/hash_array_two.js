var all_scores = {'杨璐':[131,142,144],
    '王雪':[131,136,144],
    '韩林霖':[127,139,142],
    '沙龙逸':[123,148,136],
    '李鉴学':[126,135,140],
    '韩雨萌':[129,133,138],
    '刘帅':[116,143,140],
    '康惠雯':[114,142,139],
    '刘钰婷':[115,139,135],
    '林世博':[116,142,129]};
var yang_sum_score = 0;
var wang_sum_score = 0;
//找出'杨璐'和'王雪'成绩的平均分
for(var i = 0; i < all_scores['杨璐'].length; i ++)
{
    yang_sum_score += all_scores['杨璐'][i];
}
for(var i = 0; i < all_scores['王雪'].length; i ++)
{
    wang_sum_score += all_scores['王雪'][i];
}
//打印'杨璐'和'王雪'的平均成绩
console.log('杨璐的平均成绩是：'+(yang_sum_score / 3)+'分');
console.log('王雪的平均成绩是：' +(wang_sum_score / 3)+'分');