import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

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
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }


  async onSubmit() {
    console.log(this.signUpForm.value);

    (await this._auth.signIn(this.signUpForm.value)).subscribe((res: any) => {
      console.log(res);
      // console.log(resp.headers);
      

      if (res.status) {
        this.errorMsg = ''
        this.successMsg = res.message
        sessionStorage.setItem('id', res.data.id)
        sessionStorage.setItem('name', res.data.name)
        sessionStorage.setItem('publicKey', res.data.publicKey)
        sessionStorage.setItem('privateKey', res.data.privateKey)
        setTimeout(() => {
          this._router.navigateByUrl('/dashboard')
        }, 3000)

      } else {
        this.successMsg = ''
        this.errorMsg = res.message
      }



    })

  }

}
// 

/*
  {
    "id": 1,
    "name": "Nidhey",
    "email": "nidhey60@gmail.com",
    "privateKey": "d35fbaf3580fc140cc69789145ebf24faac9dbf2eb327e23e3dfebaeea67af2a",
    "publicKey": "049e13950c55ae11043ae1aa41683761d92d7346b60580b7d35b6c8c0d7fa8a37de2b6fc62968fec436d2da52f9c0af01c6afa6acbdb35ad033b3e585412852959",
    "password": "$2a$10$SddcbfeDxCo9XIpxhSMRF.yHwIKKMhcFFxivQOaQ3R3IiXvLawOJC",
    "createdAt": "2021-12-12T05:09:09.000Z",
    "updatedAt": "2021-12-12T05:09:10.000Z"
}

*/
