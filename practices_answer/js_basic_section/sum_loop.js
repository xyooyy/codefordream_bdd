//实现1~100(不包括100)之间偶数之和
var sum_number = 0;
for(var i = 2;i < 100;i++){
    if(i%2 === 0){
        sum_number += i;
    }
}
console.log('1~100之间的偶数之和为：' + sum_number);