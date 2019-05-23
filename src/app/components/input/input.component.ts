import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.scss"]
})
export class InputComponent implements OnInit {
  @Input() name: string = "";
  @Input() type: string = "text";
  @Input() placeholder: string = "";
  @Input() icon: string = "";

  constructor() {}

  ngOnInit() {
    this.icon = this.icon + " form-control-feedback";
  }
}
