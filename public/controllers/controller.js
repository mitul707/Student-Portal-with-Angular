var myApp = angular.module('myApp', []);

myApp.controller('AppCtrl', function AppCtrl($scope, $http) {
    console.log("Hello from Container");
    /*var students = [
        {
            CWID : 707,
            first_name: "Mitul",
            last_name: "Trivedi",
            email: "mt@gmail.com",
            number : "123456"

        },
        {
            CWID : 123,
            first_name: "Deep",
            last_name: "Mehta",
            email: "dm@gmail.com",
            number : "123456"
        },
        {
            CWID : 101,
            first_name: "Harsh",
            last_name: "Dodiya",
            email: "hd@gmail.com",
            number : "123456"
        },
        {
            CWID : 505,
            first_name: "Jay",
            last_name: "Trivedi",
            email: "jt@gmail.com",
            number : "123456"
        }
    ];*/

    var students;
    $http.get('/get/students').then(function(result) {
        console.log("Get Response from the server");
        students = result.data
        $scope.contacts = result.data;
    });


    $scope.search = function() {

        if($scope.student_id) {       
            
            /*var arr = [];
            arr.push(students.find(getStud));
            

            $scope.contacts = arr;*/


            $http.get('/get/student/' + $scope.student_id).then(function(result) {
                console.log("Get Response from the server");
                students = result.data
                $scope.contacts = result.data;
            });
        }
        else {
            $http.get('/get/students').then(function(result) {
            console.log("Get Response from the server");
            students = result.data
            $scope.contacts = result.data;
    });
        }

        function getStud(item) {
            return item.CWID == $scope.student_id;
        }
    }
});