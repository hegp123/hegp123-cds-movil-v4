import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-tabs",
  templateUrl: "./tabs.component.html",
  styleUrls: ["./tabs.component.scss"]
})
export class TabsComponent implements OnInit {
  payment: string = "../../assets/img/registrarPago_22.svg";
  paymentAct: string = "../../assets/img/registrarPagoAct_22.svg";
  report: string = "../../assets/img/reportePagos_22.svg";
  reportAct: string = "../../assets/img/reportePagosAct_22.svg";
  print: string = "../../assets/img/reimpFactura_22.svg";
  printAct: string = "../../assets/img/reimpFacturaAct_22.svg";
  otherConcept: string = "../../assets/img/registrarPago_22.svg";
  otherConceptAct: string = "../../assets/img/registrarPagoAct_22.svg";

  selectTab = "payment";

  constructor() {}

  ngOnInit() {}

  tabChange(e: any) {
    this.selectTab = e.tab;
  }
}
