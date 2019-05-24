import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { CommonModule } from "@angular/common";
// import { FormsModule } from "@angular/forms";

import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  exports: [HeaderComponent, FooterComponent],
  imports: [RouterModule, CommonModule, IonicModule]
})
export class SharedModule {}
