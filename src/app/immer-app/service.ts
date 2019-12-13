import { Injectable } from "@angular/core";
import { Store } from "@ng-state/store";

@Injectable()
export class todoService{

    constructor(private store:Store<any>){
        
    }

    test(){
        console.log(this.store);
    }

}