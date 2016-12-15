/**
 * Created by skpatil on 12/14/2016.
 */
import { Pipe, PipeTransform, Injectable } from '@angular/core';
import {Name} from "./NameModel";
@Pipe({
    name: 'listFilter'
})
@Injectable()
export class ListFilter implements PipeTransform {
    transform(names:Name[], searchTerm:string) {
        if (!searchTerm) {
            return names;
        }

        return names.filter((name) => {
            let data = name.firstName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
            if (!data) {
                data = name.lastName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
            }
            return data;
        });
    }
}
