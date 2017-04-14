declare var angular;

angular.module('demoApp',[]);


interface IMainController{
    count:number;
    message:string;
    show:boolean;
    inc:()=>void;
    dec:()=>void;
}

class MainController implements IMainController{

    count = 10;
    message: string = 'yeah';
    show:boolean = true;

// Don's use $scope: https://codepen.io/martinmcwhorter/post/angularjs-1-x-with-typescript-or-es6-best-practices
    // static $inject = ['$scope'];
    // constructor($scope){
    //     $scope.vm = this;

    //     // Demo code
    //     $scope.show = true;
    //     $scope.message = 'yeah';
    // }

    inc(){
       this.count = this.count + 1;
    }
    dec(){
        this.count = this.count - 1;
    }
}


