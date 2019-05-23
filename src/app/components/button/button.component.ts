import { OnInit, Component, Output, EventEmitter, Input } from "@angular/core";

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.scss"]
})
export class ButtonComponent implements OnInit {
  //entradas
  @Input() id: string = "";
  @Input() type: string = "button";
  @Input() disabled: boolean = true;
  @Input() icon: string = "";
  @Input() name: string = "";



  constructor() {}

  ngOnInit() {}


}
