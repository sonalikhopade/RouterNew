import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RoutesComponent } from './routes/routes.component';
import { DashComponent } from './dash/dash.component';
import { UserComponent } from './user/user.component';
import { AppRouter } from "./routes";
import { RouterModule } from "@angular/router";
import { LoginComponent } from './login/login.component';
 import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    RoutesComponent,
    DashComponent,
    UserComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRouter,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
