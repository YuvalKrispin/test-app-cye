import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './menu/home/home.component';
import { UserComponent } from './menu/users/user/user.component';
import { UsersComponent } from './menu/users/users.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './shared/auth.guard';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: LoginComponent },
  { path: 'sign-up', component: SignupComponent },
  {
    path: 'home', canActivate: [AuthGuard], component: HomeComponent, children: [
      {
        path: 'users', component: UsersComponent, children: [
          { path: ':id', component: UserComponent },
          { path: '**', component: PageNotFoundComponent }
        ]
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
