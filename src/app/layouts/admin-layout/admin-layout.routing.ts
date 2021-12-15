import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";

import { UserComponent } from "../../pages/user/user.component";


import { AuthGuard } from "src/app/auth.guard";
// import { RtlComponent } from "../../pages/rtl/rtl.component";

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent, canActivate: [AuthGuard] },

  { path: "user", component: UserComponent, canActivate: [AuthGuard] },

];
