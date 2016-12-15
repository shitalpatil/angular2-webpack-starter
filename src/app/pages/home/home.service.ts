import { Injectable } from '@angular/core'
import {Name} from "./NameModel";
@Injectable()
export class HomeService {
    getNames() : Name[] {
        return [new Name("1","Shital","Patil","skpatil"),new Name("2","Amitesh","Chauhan","achauhan"),new Name("3","Sameer","Shelke","sshelke"),
            new Name("4","Ranjeeta","Lokhande","rlokhande"),new Name("5","Shishir","Thakur","sthakur"),new Name("6","Chandan","Bhattacharyya","cbhattacharyya")];
    }
    getUserName() : String {
        return "skpatil@intraedge.com";
    }
    getPassword() : String {
        return "welcome1";
    }
}