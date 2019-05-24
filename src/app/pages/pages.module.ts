import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { FormsModule } from "@angular/forms";

import { PagesComponent } from "./pages.component";
import { PromesasComponent } from "./promesas/promesas.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { PAGES_ROUTES } from "./pages.routes";

@NgModule({
  declarations: [PagesComponent, DashboardComponent, PromesasComponent],
  imports: [SharedModule, FormsModule, PAGES_ROUTES],
  exports: [DashboardComponent]
})
export class PagesModule {}
