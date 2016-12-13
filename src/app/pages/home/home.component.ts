/**
 * Created by skpatil on 12/7/2016.
 */
import {Component} from '@angular/core';
import {HomeService} from './home.service'
@Component({
    selector : 'home',
    templateUrl: './home.html',
    
})
export class HomeComponent {
    title = "The title of home"
    
    constructor() {
        /*this.names = homeService.getNames();
        this.userName = homeService.getUserName();
        this.password = homeService.getPassword();*/
    }
}