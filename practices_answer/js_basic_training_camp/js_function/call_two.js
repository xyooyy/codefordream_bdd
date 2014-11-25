var stu_wang_score = {name:'王雪雪',chinese:131,math:136,english:144};
var stu_yang_score = {name:'杨璐璐',chinese:131,math:129,english:144};

function get_stu_score(stu_score)
{
    var str_stu_score = stu_score.name + '\t' + stu_score.chinese + '\t' + stu_score.math + '\t' + stu_score.english;
    return str_stu_score;
}

//通过调用函数，使输出结果为
var str_stu_scores = '下面是部分学生的成绩'+'\n'+get_stu_score(stu_wang_score)+'\n'+get_stu_score(stu_yang_score);
//打印学生成绩，请勿删除本行
console.log(str_stu_scores);