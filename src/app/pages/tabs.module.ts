import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { SharedModule } from "../shared/shared.module";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { TabsComponent } from "./tabs.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { TABS_ROUTES } from "./tabs.routes";

@NgModule({
  declarations: [TabsComponent, DashboardComponent],
  imports: [SharedModule, FormsModule, TABS_ROUTES, IonicModule, CommonModule, FormsModule],
  exports: [DashboardComponent]
})
export class TabsModule {}
