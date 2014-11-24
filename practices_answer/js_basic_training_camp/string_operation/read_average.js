var all_scores = {'杨璐':[130,143,144],
    '王雪':[132,135,144],
    '韩林霖':[127,139,142],
    '沙龙逸':[124,148,136],
    '李鉴学':[127,135,140],
    '韩雨萌':[128,133,138],
    '刘帅':[116,143,140],
    '康惠雯':[115,142,139],
    '刘钰婷':[116,139,135],
    '林世博':[116,142,129]};
var stu_names = ['杨璐','王雪','韩林霖','沙龙逸','李鉴学','韩雨萌','刘帅','康惠雯','刘钰婷','林世博'];
for(var i = 0; i < stu_names.length; i ++)
{
    var sum_score = 0;
    for(var j = 0; j < all_scores[stu_names[i]].length; j ++)
    {
        sum_score += all_scores[stu_names[i]][j];
    }
    var average_score = sum_score / all_scores[stu_names[i]].length;
    console.log(stu_names[i]+'的平均成绩为：'+average_score);
}
