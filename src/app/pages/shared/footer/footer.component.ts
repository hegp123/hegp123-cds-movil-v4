import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"]
})
export class FooterComponent implements OnInit {
  @Input() tabName: string = "";

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
    this.paymentImg = this.tabName === "payment" ? this.paymentAct : this.payment;
    this.printImg = this.tabName === "print" ? this.printAct : this.print;
    this.reportImg = this.tabName === "report" ? this.reportAct : this.report;

    this.paymentText = this.tabName === "payment" ? "textEnabled" : "textDisabled";
    this.printText = this.tabName === "print" ? "textEnabled" : "textDisabled";
    this.reportText = this.tabName === "report" ? "textEnabled" : "textDisabled";
  }
}