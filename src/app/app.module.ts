import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import {FormsModule,FormGroup, FormControl, NgForm ,ReactiveFormsModule} from '@angular/forms'
import {Http, Headers, HttpModule} from '@angular/http'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {Ng2TelInputModule} from 'ng2-tel-input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserRegisterComponent } from './Admin/user-register/user-register.component';
import { EditUserDetailsComponent } from './Admin/user-register/edit-user-details/edit-user-details.component';
import { UserDetailsComponent } from './Admin/user-register/user-details/user-details.component';
import {RegisterService} from './register.service';
import { HttpClientModule } from '@angular/common/http';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { CommonModule } from '@angular/common';
// import 'hammerjs';


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
  import { SimpleNotificationsModule } from 'angular2-notifications';
  // import { AlertsModule } from 'angular-alert-module';
  import { AmazingTimePickerModule } from 'amazing-time-picker';
  import { AngularWebStorageModule } from 'angular-web-storage';
  import { DataSource } from '@angular/cdk/table';
 



//   const appRoutes=[
//   // {path:'', redirectTo:'', pathMatch:'full'},
 
//   {path:'register',component:UserRegisterComponent},
// ]
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
    // RouterModule.forRoot(appRoutes), 
    MatInputModule,
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
    ReactiveFormsModule,Ng2TelInputModule,BrowserAnimationsModule,FlashMessagesModule,HttpClientModule,
    NgxMatSelectSearchModule,CommonModule,
    // ,BrowserAnimationsModule,FormGroup, FormControl, NgForm ,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
