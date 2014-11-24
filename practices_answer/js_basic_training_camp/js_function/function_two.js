//创建函数print_stu_scores
function print_stu_scores(stu_scores)
{
    var str_stu_score = '下面是某班部分学生的成绩：';
    //将学生成绩的信息拼接成一整个字符串，并打印出来
    for (var i = 0; i < stu_scores.length; i ++)
    {
        str_stu_score = str_stu_score + '\n'+stu_scores[i].name+'\t'+'语文：'+stu_scores[i].chinese+'，数学：'+stu_scores[i].math+'，英语：'+stu_scores[i].english;
    }
    console.log(str_stu_score);
}