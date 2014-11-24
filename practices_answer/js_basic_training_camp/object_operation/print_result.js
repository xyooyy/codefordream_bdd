var stu_scores = [{name:'王雪',score:{chinese:131,math:136,english:144}},
    {name:'杨璐',score:{chinese:131,math:129,english:144}},
    {name:'韩林霖',score:{chinese:127,math:139,english:142}},
    {name:'沙龙逸',score:{chinese:124,math:148,english:136}}];
//分别打印每个学生的成绩，打印的每条信息的格式为：王雪的成绩为:语文->131数学->136英语->144
for(var i = 0; i < stu_scores.length; i ++)
{
    var str_stu_score = '';
    str_stu_score = str_stu_score +stu_scores[i].name + '的成绩为:'+ '语文->' + stu_scores[i].score.chinese+ '数学->' + stu_scores[i].score.math+ '英语->' + stu_scores[i].score.english;
    console.log(str_stu_score);
}
