import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.css"]
})
export class LoginPage implements OnInit {
  constructor(public router: Router) {}

  ngOnInit() {}

  login(event: any, form: any) {
    console.log("componente usuario:  " + form.user);
    console.log("componente password:  " + form.password);
    console.log("login", event);
  }
}
