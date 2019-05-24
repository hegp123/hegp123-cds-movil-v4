import { Routes, RouterModule } from "@angular/router";

import { TabsComponent } from "./tabs.component";
// import { LoginGuardGuard } from '../services/service.index';

const tabsRoutes: Routes = [
  {
    path: "tabs",
    component: TabsComponent,
    // canActivate : [ LoginGuardGuard ],
    children: [
      {
        path: "payment",
        children: [{ path: "", loadChildren: "./tabs/payment/payment.module#PaymentPageModule" }]
      },
      {
        path: "report",
        children: [{ path: "", loadChildren: "./tabs/report/report.module#ReportPageModule" }]
      },
      {
        path: "print",
        children: [{ path: "", loadChildren: "./tabs/print/print.module#PrintPageModule" }]
      },
      {
        path: "other-concept",
        children: [{ path: "", loadChildren: "./tabs/other-concept/other-concept.module#OtherConceptPageModule" }]
      },
      { path: "", redirectTo: "/tabs/payment", pathMatch: "full" }
    ]
  },
  {
    path: "",
    redirectTo: "/tabs/payment",
    pathMatch: "full"
  }
];

export const TABS_ROUTES = RouterModule.forChild(tabsRoutes);
