var stu_scores = {'杨璐':131,'王雪':131,'韩林霖':127,'沙龙逸':123,'李鉴学':126,'韩雨萌':129,'刘帅':116,'康惠雯':114,'刘钰婷':115};
var stu_names = ['杨璐','王雪','韩林霖','沙龙逸','李鉴学','韩雨萌','刘帅','康惠雯','刘钰婷'];
var scores = [];
//使用for循环取出成绩数组，打印所有成绩，找到做高分
//获取所有学生的分数(只包含学生分数不包含学生姓名)存到scores中
for(var i = 0; i < stu_names.length; i ++)
{
    scores.push(stu_scores[stu_names[i]]);
}
var highest_score = scores[0];
//使用for循环找出学生成绩的最高分
for(var j = 0; j < scores.length; j ++)
{
    if(highest_score < scores[j])
    {
        highest_score = scores[j];
    }
}
console.log('学生成绩的最高分:'+highest_score);