import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
// import { FormsModule } from "@angular/forms";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AdminLayoutRoutes } from "./admin-layout.routing";
import { DashboardComponent } from "../../pages/dashboard/dashboard.component";



import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { UserComponent } from "src/app/pages/user/user.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    
  ],
  declarations: [
    DashboardComponent,
    UserComponent
  ]
})
export class AdminLayoutModule {}
