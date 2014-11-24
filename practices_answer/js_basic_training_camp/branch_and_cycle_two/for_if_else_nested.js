//10名同学的数学成绩，请勿删除
var all_math_scores = [143,135,139,148,135,133,143,142,139,142];
var count_A = 0;//存储成绩140分以上的学生的个数
var count_B = 0;//存储成绩在130～140分之间的学生的个数
var count_C = 0;//存储成绩在130分以下的学生的个数
//添加for循环语句完成代码
for(var i = 0; i < all_math_scores.length; i ++)
{
    if(all_math_scores[i] > 140)
        count_A ++;
    else if(all_math_scores[i] > 130)
        count_B ++;
    else
        count_C ++;
}
//打印三个分数段学生的个数，请勿删除本行
console.log('140分以上的学生的个数：'+count_A);
console.log('130～140分之间的学生的个数：'+count_B);
console.log('130分以下的学生的个数：'+count_C);