import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import {FormsModule,FormGroup, FormControl, NgForm ,ReactiveFormsModule} from '@angular/forms'
import {Http, Headers, HttpModule} from '@angular/http'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {Ng2TelInputModule} from 'ng2-tel-input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserRegisterComponent } from './register/user-register.component';
import { EditUserDetailsComponent } from './register/edit-user-details/edit-user-details.component';
import { UserDetailsComponent } from './register/user-details/user-details.component';
import {RegisterService} from './register.service';

import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatSelectModule,
  MatButtonModule,
  MatCardModule, MatTooltipModule,
  MatListModule, MatToolbarModule,
  MatFormFieldModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatSlideToggle,
  MatSlideToggleModule, MatRadioModule,
  MatTabsModule, MatCheckboxModule, MatProgressBarModule, MatExpansionModule, 
  MatStepperModule, MatDialogModule, MatAutocompleteModule} from '@angular/material';

const appRoutes=[
  // {path:'', redirectTo:'', pathMatch:'full'},
 
  {path:'register',component:UserRegisterComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    UserRegisterComponent,
    EditUserDetailsComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,RouterModule,
    HttpModule,FormsModule,
    RouterModule.forRoot(appRoutes), MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatToolbarModule,
    MatStepperModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatListModule, MatTooltipModule,
    MatSnackBarModule,
    MatRadioModule, MatTabsModule, MatCheckboxModule,MatProgressBarModule, MatExpansionModule,
    ReactiveFormsModule,Ng2TelInputModule,BrowserAnimationsModule
  ],
  providers: [RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
