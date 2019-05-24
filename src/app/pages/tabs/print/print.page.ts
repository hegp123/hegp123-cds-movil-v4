import { Component, OnInit } from "@angular/core";
import { TAB_NAME_PRINT } from "src/app/Constants/Constants";

@Component({
  selector: "app-print",
  templateUrl: "./print.page.html",
  styleUrls: ["./print.page.scss"]
})
export class PrintPage implements OnInit {
  tabName: string = TAB_NAME_PRINT;

  constructor() {}

  ngOnInit() {}
}
