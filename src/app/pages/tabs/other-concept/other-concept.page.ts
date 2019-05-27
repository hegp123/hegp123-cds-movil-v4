import { Component, OnInit } from "@angular/core";
import { TAB_NAME_OTHER_CONCEPT } from "src/app/constants/Constants";

@Component({
  selector: "app-other-concept",
  templateUrl: "./other-concept.page.html",
  styleUrls: ["./other-concept.page.scss"]
})
export class OtherConceptPage implements OnInit {
  tabName: string = TAB_NAME_OTHER_CONCEPT;
  constructor() {}

  ngOnInit() {}
}
