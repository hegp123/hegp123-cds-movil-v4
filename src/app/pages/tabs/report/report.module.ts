import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";

import { ReportPage } from "./report.page";

//modulos
import { SharedModule } from "../../shared/shared.module";

const routes: Routes = [
  {
    path: "",
    component: ReportPage
  }
];

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RouterModule.forChild(routes), SharedModule],
  declarations: [ReportPage]
})
export class ReportPageModule {}
