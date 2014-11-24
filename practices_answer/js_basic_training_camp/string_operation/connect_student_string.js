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
//存储所有学生的姓名.
var stu_names = ['沙龙逸','刘钰婷','韩林霖'];
//查询数组stu_names中学生的成绩，并将他们的成绩详情拼接成一整个字符串，并打印出来
var str_stu_score_info = '下面是部分学生的成绩详情：';
for(var i = 0; i < stu_names.length; i ++)
{
    str_stu_score_info = str_stu_score_info + '\n' + stu_names[i] + '\t' + '语文：'+all_scores[stu_names[i]][0]+';'+'数学：'+all_scores[stu_names[i]][1]+';'+'英语：'+all_scores[stu_names[i]][2];
}
//打印这几名学生的成绩详情
console.log(str_stu_score_info);