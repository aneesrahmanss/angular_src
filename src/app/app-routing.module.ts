import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CustomerComponent } from './customer/customer.component';
import { LoginComponent } from './login/login.component';
import { RequestComponent } from './request/request.component';
import { AccountComponent } from './account/account.component';
import { AuthGuard } from './auth.guard'


const routes: Routes = [
  {
    path: '', component: LoginComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'logout', component: LoginComponent
  }, {
    path: 'home', component: HomeComponent,
    canActivate: [AuthGuard]
  }, {
    path: 'addcustomer', component: CustomerComponent,
    canActivate: [AuthGuard]
  }, {
    path: 'request', component: RequestComponent,
    canActivate: [AuthGuard]
  }, {
    path: 'account', component: AccountComponent,
    canActivate: [AuthGuard]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
