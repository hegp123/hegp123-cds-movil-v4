import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"]
})
export class FooterComponent implements OnInit {
  @Input() type: string = "payment";

  payment: string = "assets/img/registrarPago.png";
  print: string = "assets/img/reimpFactura.png";
  report: string = "assets/img/reportePagos.png";
  paymentAct: string = "assets/img/registrarPagoAct.png";
  printAct: string = "assets/img/reimpFacturaAct.png";
  reportAct: string = "assets/img/reportePagosAct.png";

  paymentImg: string;
  printImg: string;
  reportImg: string;

  paymentText: string;
  printText: string;
  reportText: string;

  constructor() {}

  ngOnInit() {
    this.paymentImg = this.type === "payment" ? this.paymentAct : this.payment;
    this.printImg = this.type === "print" ? this.printAct : this.print;
    this.reportImg = this.type === "report" ? this.reportAct : this.report;

    this.paymentText = this.type === "payment" ? "textEnabled" : "textDisabled";
    this.printText = this.type === "print" ? "textEnabled" : "textDisabled";
    this.reportText = this.type === "report" ? "textEnabled" : "textDisabled";
  }
}
