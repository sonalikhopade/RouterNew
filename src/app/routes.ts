import {Routes, RouterModule} from '@angular/router';
import { DashComponent } from "./dash/dash.component";
import { RoutesComponent } from "./routes/routes.component";
import { UserComponent } from "./user/user.component";
import { LoginComponent } from "./login/login.component";

export const PATHS : Routes = [
    {path :'' , component : DashComponent},
    {path :'rout' , component : RoutesComponent},
    {path :'us' , component : UserComponent},   
    {path :'login' , component : LoginComponent}          
       
];

export const AppRouter = RouterModule.forRoot(PATHS ,{initialNavigation : true});