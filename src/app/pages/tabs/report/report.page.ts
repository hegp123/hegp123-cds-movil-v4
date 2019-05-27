import { Component, OnInit } from "@angular/core";
import { TAB_NAME_REPORT } from "src/app/constants/Constants";

@Component({
  selector: "app-report",
  templateUrl: "./report.page.html",
  styleUrls: ["./report.page.scss"]
})
export class ReportPage implements OnInit {
  tabName: string = TAB_NAME_REPORT;
  constructor() {}

  ngOnInit() {}
}
