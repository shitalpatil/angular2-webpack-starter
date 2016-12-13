/**
 * Created by achauhan on 11/11/2016.
 */
import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {HomeModule} from "./pages/home/home.module";
@NgModule({
    imports: [
        BrowserModule,
        HomeModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [ AppComponent]
})
export class AppModule { }
