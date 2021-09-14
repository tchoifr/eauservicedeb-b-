import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule,Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { FourohfourComponent } from './fourohfour/fourohfour.component';
import { FooterComponent } from './footer/footer.component';
import { ArriverBebeComponent } from './Ateliers/arriver-bebe/arriver-bebe.component';
import { ThalassoComponent } from './Ateliers/thalasso/thalasso.component';
import { AllaitementComponent } from './Ateliers/allaitement/allaitement.component';
import { MassageBebeComponent } from './Ateliers/massage-bebe/massage-bebe.component';
import { NaturopediatrieComponent } from './Ateliers/naturopediatrie/naturopediatrie.component';
import { DeuilPerinatalComponent } from './Ateliers/deuil-perinatal/deuil-perinatal.component';
import { LesPacksComponent } from './les-packs/les-packs.component';
import { ContactComponent } from './contact/contact.component';
import { NgbCarouselComponent } from './ngb-carousel/ngb-carousel.component';
import { BlocpackinfoComponent } from './blocpackinfo/blocpackinfo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EvenementComponent } from './evenement/evenement.component';
import { FormulaireEvenementComponent } from './formulaire-evenement/formulaire-evenement.component';
import { LoginComponent } from './login/login.component';
import {AuthGuardService} from "./service/auth-guard.service";
import { AdminComponent } from './admin/admin.component';
import {AuthGuardAdminService} from "./service/auth-guard-admin.service";
import { DetailEvenementComponent } from './detail-evenement/detail-evenement.component';


const appRoute: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'arriverBebe', component: ArriverBebeComponent },
  { path: 'thalasso', component: ThalassoComponent },
  { path: 'allaitement', component: AllaitementComponent },
  { path: 'massageBebe', component: MassageBebeComponent },
  { path: 'naturopediatrie', component: NaturopediatrieComponent },
  { path: 'deuilPerinatal', component: DeuilPerinatalComponent },
  { path: 'contact', component: ContactComponent},
  { path: 'login', component: LoginComponent},
  { path: 'admin', canActivate: [AuthGuardAdminService], component: AdminComponent},
  { path: 'pack', component: LesPacksComponent},
  { path: 'evenement', component: EvenementComponent},
  { path: 'evenement/:id', component: DetailEvenementComponent},
  { path: 'formulaireEvenement', canActivate: [AuthGuardService], component: FormulaireEvenementComponent},
  // { path: 'list-personnage', component: ListPersonnageComponent },
  // { path: 'list-personnage/:id', component: SinglePersonnageComponent },
  // { path: 'monture', component: MontureComponent },
  // { path: 'tft', component: TftComponent},
  // { path: 'tft/:name', component: TftDetailComponent },
  { path: '', component: AccueilComponent },
  { path: 'not-found', component: FourohfourComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AccueilComponent,
    FourohfourComponent,
    FooterComponent,
    ArriverBebeComponent,
    ThalassoComponent,
    AllaitementComponent,
    MassageBebeComponent,
    NaturopediatrieComponent,
    DeuilPerinatalComponent,
    LesPacksComponent,
    ContactComponent,
    NgbCarouselComponent,
    BlocpackinfoComponent,
    EvenementComponent,
    FormulaireEvenementComponent,
    LoginComponent,
    AdminComponent,
    DetailEvenementComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoute, { anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' }),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
