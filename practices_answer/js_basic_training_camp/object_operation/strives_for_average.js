var stu_scores = [{name:'王雪雪',chinese:131,math:136,english:144},
    {name:'杨璐璐',chinese:131,math:129,english:144},
    {name:'韩林霖',chinese:126,math:139,english:142},
    {name:'沙龙逸',chinese:124,math:148,english:136}];
var str_stu_score = '下面是某班部分学生的成绩：';
var c_sum_score = 0;
var m_sum_score = 0;
var e_sum_score = 0;
for (var i = 0; i < stu_scores.length; i ++)
{
    str_stu_score = str_stu_score + '\n'+stu_scores[i].name+'\t'+'语文：'+stu_scores[i].chinese+'，数学：'+stu_scores[i].math+'，英语：'+stu_scores[i].english;
    c_sum_score += stu_scores[i].chinese;
    m_sum_score += stu_scores[i].math;
    e_sum_score += stu_scores[i].english;
}
str_stu_score = str_stu_score + '\n'+'====================================';
str_stu_score = str_stu_score + '\n'+'平均分'+'\t'+'语文：'+c_sum_score/stu_scores.length+'，数学：'+m_sum_score/stu_scores.length+'，英语：'+e_sum_score/stu_scores.length;
console.log(str_stu_score);
