/**
 * Created by skpatil on 12/16/2016.
 */
import { NgModule } from '@angular/core';
import { BoardComponent} from "./board.component";
import {WidgetModule} from "../widgets/widget.module";
import { FormsModule } from '@angular/forms';
import {CommonModule} from '@angular/common';
import {WidgetBoardService} from "./board.service";
@NgModule({
    imports:[
        CommonModule,
        WidgetModule,
        FormsModule
    ],
    declarations:[
        BoardComponent
    ], exports: [
        BoardComponent
    ],
    providers:[WidgetBoardService]
})
export class BoardModule {
    
}