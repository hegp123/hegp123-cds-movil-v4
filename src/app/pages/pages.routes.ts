import { Routes, RouterModule } from "@angular/router";

import { PagesComponent } from "./pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { PromesasComponent } from "./promesas/promesas.component";
import { PaymentPage } from "./tabs/payment/payment.page";
// import { LoginGuardGuard } from '../services/service.index';

const pagesRoutes: Routes = [
  {
    path: "",
    component: PagesComponent,
    // canActivate : [ LoginGuardGuard ],
    children: [
      { path: "dashboard", component: DashboardComponent, data: { titulo: "Dashboard" } },
      { path: "promesas", component: PromesasComponent, data: { titulo: "Promesas - Ejemplo" } },
      // { path: "payment", component: PaymentPage },

      { path: "", redirectTo: "/promesas", pathMatch: "full" }
    ]
  }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
