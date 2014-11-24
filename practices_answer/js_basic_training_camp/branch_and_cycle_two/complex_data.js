//某班学生的语文成绩
var stu_scores = {'杨璐':131,
    '王雪':131,
    '韩林霖':127,
    '沙龙逸':123,
    '李鉴学':126,
    '韩雨萌':129,
    '刘帅':116,
    '康惠雯':114,
    '刘钰婷':115};
var stu_names = ['刘帅','康惠雯','沙龙逸','王雪','杨璐','李丽'];
var stu_names_scores = {};
//获取数组stu_names中学生的成绩
for(var i = 0; i < stu_names.length; i ++)
{
    if(stu_scores[stu_names[i]] !== undefined)
    {
        stu_names_scores[stu_names[i]] = stu_scores[stu_names[i]];
    }
}
//打印哈希数组stu_names_scores中学生成绩
console.log('刘帅成绩：'+stu_names_scores['刘帅']);
console.log('康惠雯成绩：'+stu_names_scores['康惠雯']);
console.log('沙龙逸成绩：'+stu_names_scores['沙龙逸']);
console.log('王雪成绩：'+stu_names_scores['王雪']);
console.log('杨璐成绩：'+stu_names_scores['杨璐']);