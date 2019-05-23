import { Component, OnInit, Input, forwardRef } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: "app-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements OnInit, ControlValueAccessor {
  //entradas
  @Input() name: string = "";
  @Input() type: string = "text";
  @Input() placeholder: string = "";
  @Input() icon: string = "";
  @Input("value") val: string;

  //eventos
  onChange: any = () => {};
  onTouched: any = () => {};

  constructor() {}

  ngOnInit() {
    this.icon = this.icon + " form-control-feedback";
  }

  get value() {
    return this.val;
  }

  set value(val) {
    this.val = val;
    this.onChange(val);
    this.onTouched();
  }

  writeValue(value) {
    if (value) {
      this.value = value;
    }
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }
}
