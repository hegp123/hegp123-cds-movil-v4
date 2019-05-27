import { Component, OnInit } from "@angular/core";
import { TAB_NAME_PAYMENT } from "src/app/constants/Constants";

@Component({
  selector: "app-payment",
  templateUrl: "./payment.page.html",
  styleUrls: ["./payment.page.scss"]
})
export class PaymentPage implements OnInit {
  tabName: string = TAB_NAME_PAYMENT;
  constructor() {}

  ngOnInit() {}
}
