/**
 * Created by achauhan on 11/11/2016.
 */
import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {HomeModule} from "./pages/home/home.module";
import {HomeComponent} from "./pages/home/home.component";
import {ListFilter} from "./pages/home/home.listFilter";
import { FormsModule } from '@angular/forms';
import {WidgetComponent} from "./pages/widgets/widget.component";
import {WidgetModule} from "./pages/widgets/widget.module";
@NgModule({
    imports: [
        BrowserModule,
        HomeModule,
        FormsModule,
        WidgetModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,ListFilter,
        WidgetComponent
    ],
    bootstrap: [ AppComponent]
})
export class AppModule { }
