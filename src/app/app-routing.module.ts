import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserRegisterComponent } from './Admin/user-register/user-register.component';
import { EditUserDetailsComponent } from './Admin/user-register/edit-user-details/edit-user-details.component';
import { UserDetailsComponent } from './Admin/user-register/user-details/user-details.component';

const routes: Routes = [{
  path: 'createUser',
  component: UserRegisterComponent,  
  pathMatch:'full'     
},
{
  path: 'userDetails',
  component: UserDetailsComponent,  
  pathMatch:'full'     
},
{
  path: 'editUserDetails/:id',
  component: EditUserDetailsComponent,  
  pathMatch:'full'     
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
