import { Component, OnInit } from "@angular/core";
import Chart from 'chart.js';
import { WalletService } from "src/app/services/wallet.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "dashboard.component.html"
})
export class DashboardComponent implements OnInit {
  public canvas : any;
  public ctx;
  public datasets: any;
  public data: any;
  public myChartData;
  public clicked: boolean = true;
  public clicked1: boolean = false;
  public clicked2: boolean = false;

  myWalletBalance = 0
  allTransactions: any = []

  trasnactions = []

  active = null

  constructor(
    private _wallet: WalletService
  ) {}

  async ngOnInit() {

    (await this._wallet.getMyBalance()).subscribe((res: any) => {
      // console.log(res);
      this.myWalletBalance = res.balance
      sessionStorage.setItem('balance', this.myWalletBalance.toString())
    })

    ;(await this._wallet.getAllTransactions()).subscribe((res: any) => {
      console.log(res);
      this.allTransactions = res
    })

  }

  isSelectedBlock(i) {
    
    this.trasnactions = this.allTransactions[i].transactions
    
    console.log(this.trasnactions);
    
    return this.active = i



  }
}
