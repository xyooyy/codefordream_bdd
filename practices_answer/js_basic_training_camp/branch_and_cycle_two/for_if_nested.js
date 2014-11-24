//10名同学的数学成绩，请勿删除
var all_math_scores = [143,135,139,148,135,133,143,142,139,142];
//保存最高成绩
var highest_score = all_math_scores[0];
//通过for和if寻找到这10名学生中数学成绩最高的成绩
for(var i = 0; i < all_math_scores.length; i ++)
{
    if(highest_score < all_math_scores[i])
    {
        highest_score = all_math_scores[i];
    }
}
//输出最高成绩
console.log('最高成绩为：'+highest_score);