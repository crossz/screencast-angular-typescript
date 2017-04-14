angular.module('demoApp', []);
var MainController = (function () {
    function MainController() {
        this.count = 10;
        this.message = 'yeah';
        this.show = true;
    }
    // static $inject = ['$scope'];
    // constructor($scope){
    // $scope.vm = this;
    // // Demo code
    // $scope.show = true;
    // $scope.message = 'yeah';
    // }
    MainController.prototype.inc = function () {
        this.count = this.count + 1;
    };
    MainController.prototype.dec = function () {
        this.count = this.count - 1;
    };
    return MainController;
}());
