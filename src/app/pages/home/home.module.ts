import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { BrowserModule }  from '@angular/platform-browser';
import {HomeComponent} from "./home.component.ts";
import {HomeService} from "./home.service";
import {LoginModule} from "../login/login.module";
import {ListFilter} from "./home.listFilter";
import { FormsModule } from '@angular/forms';
/**
 * Created by skpatil on 12/8/2016.
 */
@NgModule({
    imports: [CommonModule,FormsModule ],
     declarations: [
        HomeComponent,ListFilter
    ],
    exports:[HomeComponent],
    providers:[HomeService]
})
export class HomeModule { }
