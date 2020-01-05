import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EmployeeComponent} from "./employee/employee.component";
import {AddEmployeeComponent} from "./add-employee/add-employee.component";
import {LoginComponent} from "./login/login.component";
import {LogoutComponent} from "./logout/logout.component";
import {AuthguardService} from "./service/authguard.service";


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'employees', component: EmployeeComponent, canActivate: [AuthguardService]},
  {path: 'addemployee', component: AddEmployeeComponent, canActivate: [AuthguardService]},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent, canActivate: [AuthguardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
