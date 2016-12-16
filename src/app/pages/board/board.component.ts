/**
 * Created by skpatil on 12/16/2016.
 */
import {Component} from '@angular/core';
import {WidgetData} from './WidgetData';
import {WidgetBoardService} from './board.service';

@Component({
    selector:'board',
    templateUrl:'./board.html'
})
export class BoardComponent {
    widgetDataList: WidgetData[];
    constructor(widgetBoardService:WidgetBoardService){
        this.widgetDataList = widgetBoardService.getWidgets();
    }
}