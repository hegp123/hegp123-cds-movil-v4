import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "payment", pathMatch: "full" },
  { path: "login", loadChildren: "./pages/login/login.module#LoginPageModule" },
  { path: "payment", loadChildren: "./pages/tabs/payment/payment.module#PaymentPageModule" },  { path: 'report', loadChildren: './pages/tabs/report/report.module#ReportPageModule' },
  { path: 'print', loadChildren: './pages/tabs/print/print.module#PrintPageModule' },
  { path: 'other-concept', loadChildren: './pages/tabs/other-concept/other-concept.module#OtherConceptPageModule' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
