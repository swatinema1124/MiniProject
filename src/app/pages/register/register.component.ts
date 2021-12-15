import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  errorMsg = ''
  successMsg = ''
  signUpForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private _auth: AuthService,
    private _router: Router
  ) { }

  ngOnInit(): void {

    this.signUpForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

  }

  async onSubmit() {
    console.log(this.signUpForm.value);

    (await this._auth.signUp(this.signUpForm.value)).subscribe((res: any) => {
      console.log(res);

      if(res.status){
        this.errorMsg = ''
        this.successMsg = res.message

        setTimeout(() => {
          this._router.navigateByUrl('/login')
        }, 3000)
       
      }else{
        this.successMsg = ''
        this.errorMsg = res.message
      }

      
      
    })

  }

}

