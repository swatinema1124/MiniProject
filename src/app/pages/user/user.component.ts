import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { WalletService } from "src/app/services/wallet.service";


@Component({
  selector: "app-user",
  templateUrl: "user.component.html"
})
export class UserComponent implements OnInit {

  errorMsg = ''
  successMsg = ''
  transferCoinForm: FormGroup;

  myTrasnactions: any = []

  constructor(
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private _router: Router,
    private _wallet: WalletService
  ) { }

  userName = sessionStorage.getItem('name')
  balance = sessionStorage.getItem('balance') || 0
  // txn = sessionStorage.getItem('txns') || 0
  publicKey = sessionStorage.getItem('publicKey')
  privateKey = sessionStorage.getItem('privateKey')

  async ngOnInit() {

    (await this._wallet.getMyTransactions()).subscribe((res: any) => {
      console.log(res);

      this.myTrasnactions = res
      
    })


    this.transferCoinForm = this.formBuilder.group({
      fromAddress: [this.publicKey, [Validators.required]],
      toAddress: ['', [Validators.required]],
      privateKey: [this.privateKey, [Validators.required]],
      amount: ['', [Validators.required]],
    });
  }

  async onSubmit() {
    console.log(this.transferCoinForm.value);

    (await this._wallet.transferCoins(this.transferCoinForm.value)).subscribe((res: any) => {
      if(res){
        console.log(res);
        // this.myTrasnactions = res
        if(res){
          this.toastr.success('', 'Successfully Sent!')

          setTimeout(() => {
            window.location.reload()
          }, 2000);
        }
          
      }
    })

  }

  async getMyTransactions(el: HTMLElement){
    el.scrollIntoView();
  }

  copyMessage(val: string) {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this.toastr.success('', 'Copied!');
  }
}
