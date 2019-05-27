import { Component, OnInit } from "@angular/core";
import { TAB_NAME_PAYMENT, TAB_NAME_REPORT, TAB_NAME_PRINT, TAB_NAME_OTHER_CONCEPT } from "../constants/Constants";

@Component({
  selector: "app-tabs",
  templateUrl: "./tabs.component.html",
  styleUrls: ["./tabs.component.scss"]
})
export class TabsComponent implements OnInit {
  //header
  headerTitle: string = "Registrar Pago";

  //footer
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
    if (e.tab === TAB_NAME_PAYMENT) {
      this.headerTitle = "Registrar Pago";
    } else if (e.tab === TAB_NAME_REPORT) {
      this.headerTitle = "Reportes";
    } else if (e.tab === TAB_NAME_PRINT) {
      this.headerTitle = "Reimprimir Orden";
    } else if (e.tab === TAB_NAME_OTHER_CONCEPT) {
      this.headerTitle = "Otro Conceptos";
    }
  }
}
