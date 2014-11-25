'use strict';

angular.module('orderMasterApp')
    .controller('OrderDetailsCtrl', function ($scope, $location) {
        $scope.people_number = 0;

        $scope.choose_people = '选人';
        $scope.go_choose_person = function(){
            $location.path('/choose_person');};
        $scope.person_name = localStorage.getItem('person_name');
        //*****************在下一行添加"变量绑定"一节的代码*****************



        //*****************在下一行添加"函数绑定"一节的代码*****************



        //*****************在下一行添加"本地存储"一节的部分代码**************







    });
