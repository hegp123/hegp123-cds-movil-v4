import { ButtonComponent } from "./button/button.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { InputComponent } from "./input/input.component";
import { IonicModule } from "@ionic/angular";
import { SelectComponent } from "./select/select.component";

@NgModule({
  declarations: [InputComponent, ButtonComponent, SelectComponent],
  exports: [InputComponent, ButtonComponent, SelectComponent],
  imports: [CommonModule, IonicModule, FormsModule]
})
export class ComponentsModule {}
