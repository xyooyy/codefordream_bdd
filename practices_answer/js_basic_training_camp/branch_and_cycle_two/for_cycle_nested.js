var all_scores = {'杨璐':[131,142,144],
    '王雪':[131,136,144],
    '韩林霖':[127,139,142],
    '沙龙逸':[124,148,136],
    '李鉴学':[127,135,140],
    '韩雨萌':[129,133,138],
    '刘帅':[116,143,140],
    '康惠雯':[114,142,139],
    '刘钰婷':[115,139,135],
    '林世博':[116,142,129]};
//存储学生的姓名
var stu_names = ['杨璐','王雪','韩林霖','沙龙逸','李鉴学'];
//求stu_names中学生的平均成绩并打印
for(var i = 0; i < stu_names.length; i ++)
{
    var sum_score = 0;
    for(var j = 0; j < all_scores[stu_names[i]].length; j++)
    {
        sum_score += all_scores[stu_names[i]][j];
    }
    console.log(sum_score/all_scores[stu_names[i]].length);
}