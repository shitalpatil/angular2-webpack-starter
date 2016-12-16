/**
 * Created by skpatil on 12/14/2016.
 */
import {Component,Input} from '@angular/core';
import {WidgetData} from "../board/WidgetData";
@Component({
    selector : 'widget',
    templateUrl: './widget.html',
})
export class WidgetComponent {
    test:string;
    @Input() widgetData:WidgetData
    constructor(){
        this.test='This is test';
    }
}