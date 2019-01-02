import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserRegisterComponent } from '../register/user-register.component';
import { EditUserDetailsComponent } from './edit-user-details/edit-user-details.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [
    //User start
    {
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
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }