var app = angular.module('MyApp', []);


app.controller('MyController', function ($scope, $http) {
    $http.get("http://wipro.azurewebsites.net/api/user")
         .then(function (response) {
             $scope.users = response.data;
             console.log(response.data);
         })



    $scope.sortColumn = "name";
    $scope.reverseSort = false;

    $scope.sortData = function (column) {
        $scope.reverseSort = ($scope.sortColumn == column) ?
            !$scope.reverseSort : false;
        $scope.sortColumn = column;
    }

    $scope.getSortClass = function (column) {

        if ($scope.sortColumn == column) {
            return $scope.reverseSort
              ? 'arrow-down'
              : 'arrow-up';
        }

        return '';
    }

    $scope.editRow = function (row) {
        $scope.original = this.row;
        $scope.editform = angular.copy(this.row);
        $scope.$('#myModal').modal('show');
    };

    //$scope.editContact = function (contact) {
    //    $scope.model.selected = angular.copy(contact);
    //};


    $scope.Update = function () {
        angular.copy($scope.editform, $scope.original);

    };
    $scope.RemoveRow = function (index) {

        $scope.users.splice(index, 1);
    };
});