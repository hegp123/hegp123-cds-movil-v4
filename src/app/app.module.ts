import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { AppComponent } from "./app.component";
// import { AppRoutingModule } from "./app-routing.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

//RUTAS
import { APP_ROUTES } from "./app.routes";

//MODULOS
import { TabsModule } from "./pages/tabs.module";

//COMPONENTES
import { LoginPage } from "./login/login.page";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { InputComponent } from "./components/input/input.component";
import { ButtonComponent } from "./components/button/button.component";

@NgModule({
  declarations: [AppComponent, LoginPage, InputComponent, ButtonComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), NgbModule.forRoot(), APP_ROUTES, TabsModule, FormsModule, ReactiveFormsModule],
  providers: [StatusBar, SplashScreen, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule {}
