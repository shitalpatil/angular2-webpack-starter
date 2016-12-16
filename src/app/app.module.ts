/**
 * Created by achauhan on 11/11/2016.
 */
import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {HomeModule} from "./pages/home/home.module";
import { FormsModule } from '@angular/forms';
import {WidgetModule} from "./pages/widgets/widget.module";
import {BoardModule} from "./pages/board/board.module";
@NgModule({
    imports: [
        BrowserModule,
        HomeModule,
        FormsModule,
        //WidgetModule,
        BoardModule
    ],
    declarations: [
        AppComponent

    ],
    bootstrap: [ AppComponent]
})
export class AppModule { }
