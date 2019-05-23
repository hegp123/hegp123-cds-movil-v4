import { OnInit, Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.scss"]
})
export class ButtonComponent implements OnInit {
  @Input() id: string = "";
  @Input() type: string = "button";
  @Input() disabled: boolean = true;
  @Input() icon: string = "";
  @Input() name: string = "";
  @Output() onClick = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  onClickButton(event) {
    console.log('componente button');
    this.onClick.emit(event);
  }
}
