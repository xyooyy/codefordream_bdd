var all_scores = {'杨璐':[131,143,144],'王雪':[131,135,144],'韩林霖':[127,139,142],'沙龙逸':[123,148,136],'李鉴学':[126,135,140],'韩雨萌':[129,133,138],'刘帅':[116,143,140],'康惠雯':[114,142,139],'刘钰婷':[115,139,135],'林世博':[116,142,129]};
var stu_names = ['杨璐','王雪','韩林霖','沙龙逸','李鉴学','韩雨萌','刘帅','康惠雯','刘钰婷','林世博'];
var stu_name = '李鉴学';
for(var i = 0; i < stu_names.length; i ++)
{
    if(stu_names[i] == stu_name)
    {
        for(var j = 0; j < all_scores[stu_name].length; j ++)
        {if(j === 0)
            {console.log(stu_name+'是第'+i+'个学生，他的语文成绩为：'+all_scores[stu_name][j]);}
            if(j === 1)
            {console.log(stu_name+'是第'+i+'个学生，他的数学成绩为：'+all_scores[stu_name][j]);}
            if(j === 2)
            {console.log(stu_name+'是第'+i+'个学生，他的英语成绩为：'+all_scores[stu_name][j]);}
        }
    }
}