/**
 * Created by skpatil on 12/7/2016.
 */
import {Component} from '@angular/core';
import {HomeService} from './home.service'
import {Name} from "./NameModel";
@Component({
    selector : 'home',
    templateUrl: './home.html',
    
    
})
export class HomeComponent {
    title = "Search:"
    searchTerm: string
    names : Name[];
    constructor(homeService : HomeService) {
        this.names = homeService.getNames();
    }
}