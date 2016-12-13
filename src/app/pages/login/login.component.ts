/**
 * Created by skpatil on 12/8/2016.
 */
import {Component} from '@angular/core';
import {HomeService} from "../home/home.service";
@Component({
    selector:'login',
    templateUrl:'./login.html'
    
})
export class LoginComponent {
    userName:String;
    password:String;
    constructor(homeService : HomeService){
        this.userName = homeService.getUserName();
        this.password = homeService.getPassword();
    }
}