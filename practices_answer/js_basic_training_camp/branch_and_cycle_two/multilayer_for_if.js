var all_scores = {'杨璐':[131,143,144],'王雪':[131,135,144],'韩林霖':[127,139,142],'沙龙逸':[123,148,136],'李鉴学':[126,135,140],'韩雨萌':[129,133,138],'刘帅':[116,143,140],'康惠雯':[114,142,139],'刘钰婷':[115,139,135],'林世博':[116,142,129]};
var stu_names = ['杨璐','王雪','韩林霖','沙龙逸','李鉴学','韩雨萌','刘帅','康惠雯','刘钰婷','林世博'];
var scores_A_count = 0;
var scores_B_count = 0;
var scores_C_count = 0;
for(var i = 0; i < stu_names.length; i ++)
{
    for(var j = 0; j < all_scores[stu_names[i]].length; j ++)
    {if(all_scores[stu_names[i]][j] > 140)
        { scores_A_count ++; }
        else if(all_scores[stu_names[i]][j] >= 130)
        {scores_B_count ++;}
        else
        {scores_C_count ++;} }
}
console.log('所有分数中>140分的个数：'+scores_A_count);
console.log('介于130到140之间的成绩（包括130和140）的个数：'+scores_B_count);
console.log('<130的成绩的个数：'+scores_C_count);