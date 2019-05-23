import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { LoginPage } from "./login.page";
//modulos
import { ComponentsModule } from "./../../components/components.module";

const routes: Routes = [
  {
    path: "",
    component: LoginPage
  }
];

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, IonicModule, RouterModule.forChild(routes), NgbModule.forRoot(), ComponentsModule],
  declarations: [LoginPage]
})
export class LoginPageModule {}
