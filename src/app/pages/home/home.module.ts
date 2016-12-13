import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { BrowserModule }  from '@angular/platform-browser';
import {HomeComponent} from "./home.component.ts";
import {HomeService} from "./home.service";
import {LoginModule} from "../login/login.module";
/**
 * Created by skpatil on 12/8/2016.
 */
@NgModule({
    imports: [CommonModule],
     declarations: [
        HomeComponent
    ]
})
export class HomeModule { }
