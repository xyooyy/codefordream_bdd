'use strict';

angular.module('orderMasterApp')
    .controller('ChoosePersonCtrl', function ($scope, $location) {
        $scope.people_number = 0;
        $scope.people= [{name:'赵大'},{name:'钱二'},{name:'张三'},{name:'李四'},{name:'王五'},{name:'刘六'}];
        //********需要显示的用户名: '赵大' '钱二' '张三' '李四' '王五' '刘六' ********
        //******************在下一行开始添加"列表迭代器"一节的代码********************




        $scope.choose_person = function (person_name) {
            //*****************在下一行添加"本地存储"一节的部分代码*****************
            localStorage.setItem('person_name', person_name);
            $location.path('/order_details');
        }


    });
