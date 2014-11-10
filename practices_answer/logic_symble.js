//通过分析第九行中的条件判断语句，给第六行中profile对象的score属性添加一个合适的数字值。
//使console输出: 嘿Tom!你通过了本学期的Maths考试。
var profile = {
    name : "Tom",
    course : "Maths",
    score : 70
};

console.log("嘿" + profile.name + "!你" + (profile.score >= 60 ? "通过了" : "没通过") + "本学期的" + profile.course + "考试。");