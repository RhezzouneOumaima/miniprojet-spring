import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {AuthenticationGuard} from "./guards/authentication.guard";
import {AdminTemplateComponent} from "./admin-template/admin-template.component";
import {ModulesComponent} from "./modules/modules.component";
import {DetailsDeChaqueModuleComponent} from "./details-de-chaque-module/details-de-chaque-module.component";
import {NewModuleComponent} from "./new-module/new-module.component";
import {UpdateModuleComponent} from "./update-module/update-module.component";
import {ProfsComponent} from "./profs/profs.component";
import {NewProfComponent} from "./new-prof/new-prof.component";
import {UpdateProfComponent} from "./update-prof/update-prof.component";
import {DetailsProfComponent} from "./details-prof/details-prof.component";
import {EtudiantComponent} from "./etudiant/etudiant.component";
import {NewEtudiantComponent} from "./new-etudiant/new-etudiant.component";
import {UpdateEtudiantComponent} from "./update-etudiant/update-etudiant.component";
import {DetailsEtudiantComponent} from "./details-etudiant/details-etudiant.component";
import {PdfDetailsEtdComponent} from "./pdf-details-etd/pdf-details-etd.component";
import {NewDepComponent} from "./new-dep/new-dep.component";
import {UpdateDepComponent} from "./update-dep/update-dep.component";
import {DetailsDepComponent} from "./details-dep/details-dep.component";


const routes: Routes = [
  {path: "login", component : LoginComponent},
  {path: "", component : LoginComponent},
  {path: "admin", component : AdminTemplateComponent,canActivate : [AuthenticationGuard],
    children :[
      {path: "home", component : HomeComponent},
      {path: "modules", component : ModulesComponent},
      {path: "details-module/:id", component : DetailsDeChaqueModuleComponent},
      {path: "newModule", component : NewModuleComponent},
      {path: "updateModule/:id", component : UpdateModuleComponent},
      {path: "profs", component : ProfsComponent},
      {path: "add-prof", component : NewProfComponent},
      {path: "updateProf/:id", component : UpdateProfComponent},
      {path: "detailsProf/:id", component : DetailsProfComponent},
      {path: "etudiants", component : EtudiantComponent},
      {path: "newEtudiant", component : NewEtudiantComponent},
      {path: "newDep", component : NewDepComponent},
      {path: "updateEtudiant/:id", component : UpdateEtudiantComponent},
      {path: "updateDep/:id", component : UpdateDepComponent},
      {path: "detailsetd/:id", component : DetailsEtudiantComponent},
      {path: "detailsdep/:id", component : DetailsDepComponent},
      {path: "printetd/:id", component : PdfDetailsEtdComponent},


    ]
    },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
