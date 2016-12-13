import { NgModule } from '@angular/core';
import {LoginComponent} from "../login/login.component.ts";
import {HomeComponent} from "../home/home.component";
import {HomeService} from "../home/home.service";
import {HomeModule} from "../home/home.module";
/**
 * Created by skpatil on 12/8/2016.
 */
@NgModule({
    declarations: [
        LoginComponent
    ],
    providers: [HomeService]

})
export class LoginModule { }
