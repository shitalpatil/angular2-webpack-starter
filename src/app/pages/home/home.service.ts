import { Injectable } from '@angular/core'
@Injectable()
export class HomeService {
    getNames() : String[] {
        return ["Shital","Amitesh","Sameer"];
    }
    getUserName() : String {
        return "skpatil@intraedge.com";
    }
    getPassword() : String {
        return "welcome1";
    }
}