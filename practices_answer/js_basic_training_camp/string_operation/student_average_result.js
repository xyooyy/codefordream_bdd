var all_scores = {'杨璐':[131,143,144],'王雪':[131,135,144],'韩林霖':[127,139,142],'沙龙逸':[124,148,137],'李鉴学':[126,135,140],'韩雨萌':[129,133,138],'刘帅':[116,143,140],'康惠雯':[114,142,139],'刘钰婷':[115,139,135],'林世博':[116,142,129]};
var stu_names = ['沙龙逸','刘钰婷','韩林霖'];
var chinese_sum_score = 0;
var math_sum_score = 0;
var english_sum_score = 0;
var str_stu_score_info = '下面是部分学生的成绩详情：';
for(var i = 0; i < stu_names.length; i ++)
{
    str_stu_score_info = str_stu_score_info + '\n' + stu_names[i] + '\t' + '语文：'+all_scores[stu_names[i]][0]+';'+'数学：'+all_scores[stu_names[i]][1]+';'+'英语：'+all_scores[stu_names[i]][2];
    chinese_sum_score += all_scores[stu_names[i]][0];
    math_sum_score += all_scores[stu_names[i]][1];
    english_sum_score += all_scores[stu_names[i]][2];
}
str_stu_score_info = str_stu_score_info + '\n' + '平均成绩' + '\t' + '语文：'+ chinese_sum_score/3 +';'+'数学：'+math_sum_score/3+';'+'英语：'+english_sum_score/3;
console.log(str_stu_score_info);