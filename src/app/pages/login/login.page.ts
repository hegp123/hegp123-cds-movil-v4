import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.css"]
})
export class LoginPage implements OnInit {
  constructor(public router: Router) {}

  ngOnInit() {}

  login(forma: NgForm) {
    console.log(forma);
  }
}
