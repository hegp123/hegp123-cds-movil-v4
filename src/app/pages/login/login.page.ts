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

  login(form: any) {
    console.log("validamos usuario:  " + form.user + "   y  password: " + form.password); 
  }
}
