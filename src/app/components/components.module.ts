import { ButtonComponent } from "./button/button.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InputComponent } from "./input/input.component";
import { IonicModule } from "@ionic/angular";

@NgModule({
  declarations: [InputComponent, ButtonComponent],
  exports: [InputComponent, ButtonComponent],
  imports: [CommonModule, IonicModule]
})
export class ComponentsModule {}
