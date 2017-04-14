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

    inc(){
       this.count = this.count + 1;
    }
    dec(){
        this.count = this.count - 1;
    }
}


