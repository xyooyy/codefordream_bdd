var all_scores = {'杨璐':[131,143,144],
    '王雪':[131,135,144],
    '韩林霖':[127,139,142],
    '沙龙逸':[123,148,136],
    '李鉴学':[126,135,140],
    '韩雨萌':[129,133,138],
    '刘帅':[116,143,140],
    '康惠雯':[114,142,139],
    '刘钰婷':[115,139,135],
    '林世博':[116,142,129]};
var highest_score ;
var stu_name = '李鉴学';
if(all_scores[stu_name][0] > all_scores[stu_name][1])
{
    highest_score = all_scores[stu_name][0];
}
else
{
    highest_score = all_scores[stu_name][1];
}
console.log('前两门的成绩的较高分为：'+highest_score);
if(highest_score < all_scores[stu_name][2])
{
    highest_score = all_scores[stu_name][2];
}
console.log('三科成绩中的最高分为：'+highest_score);