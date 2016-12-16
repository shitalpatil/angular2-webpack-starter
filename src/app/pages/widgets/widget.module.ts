/**
 * Created by skpatil on 12/14/2016.
 */
import { NgModule } from '@angular/core';
import {WidgetComponent} from "./widget.component";
@NgModule({
    
    declarations: [
        WidgetComponent
    ], exports:[WidgetComponent]


})
export class WidgetModule { }
