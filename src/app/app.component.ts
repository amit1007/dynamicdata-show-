import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  show =  false;
  userRole:boolean=true;
  roleStr:string='admin';
  pingUserID:string;
  title = 'app';
  private config = { hour: 7, minute: 15, meriden: 'PM', format: 12 };
  constructor(
    private fb: FormBuilder,
    // private authService: AuthService,
    private router: Router,
    // private api: ApiService,
    private formBuilder: FormBuilder,
    public snackbar: MatSnackBar,
  ) { }
  ngOnInit(){
   
  }
}
