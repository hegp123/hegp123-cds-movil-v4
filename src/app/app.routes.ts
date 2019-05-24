import { Routes, RouterModule } from "@angular/router";
import { LoginPage } from "./login/login.page";

//arreglo de rutas
const appRoutes: Routes = [{ path: "login", component: LoginPage }, { path: "**", component: LoginPage }];

// { path: "",  redirectTo: ''},//cualquier ruta vacia va a redireccionar a dashboard
//{ path: "**", component: NopagefoundComponent }  // cualquier ruta que no sea las anteriores la redirecciona a 404

export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true });
