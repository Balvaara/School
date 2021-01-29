import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ReactiveFormsModule, Validators, FormsModule } from '@angular/forms';

import { APP_BASE_HREF, NgIfContext, NgLocaleLocalization, NgClass } from '@angular/common';



import { JwPaginationComponent } from 'jw-angular-pagination';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AgmCoreModule } from '@agm/core';

import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { RouterModule } from '@angular/router';
import {NgxPrintModule} from 'ngx-print';
import { ForrConnexionComponent } from './components/forr-connexion/forr-connexion.component';
import { NavComponent } from './nav/nav/nav.component';
import { SidbarComponent } from './sidbar/sidbar/sidbar.component';
import { AcceuilComponent } from './acceuil/acceuil/acceuil.component';
import { ClasseComponent } from './classe/classe/classe.component';
import { ListeclasseComponent } from './classe/listeclasse/listeclasse.component';
import { AjoutCycleComponent } from './cycles/ajout-cycle/ajout-cycle.component';
import { ListcycleComponent } from './cycles/listcycle/listcycle.component';
import { AjoutEleveComponent } from './eleves/ajout-eleve/ajout-eleve.component';
import { ListeEleveComponent } from './eleves/liste-eleve/liste-eleve.component';
import { ListeParentComponent } from './eleves/liste-parent/liste-parent.component';
import { AjouMatComponent } from './matieres/ajou-mat/ajou-mat.component';
import { ListMatComponent } from './matieres/list-mat/list-mat.component';
import { AjoutProfComponent } from './matieres/ajout-prof/ajout-prof.component';
import { ListProfComponent } from './matieres/list-prof/list-prof.component';
import { ListeSemestreComponent } from './semestres/liste-semestre/liste-semestre.component';
import { MenuExamComponent } from './menu-exam/menu-exam.component';
import { AjoutSemComponent } from './semestres/ajout-sem/ajout-sem.component';
import { NoteComponent } from './notes/note/note.component';
import { BulttinComponent } from './bulttin/bulttin/bulttin.component';




@NgModule({
  declarations: [
    AppComponent,
    ForrConnexionComponent,
    JwPaginationComponent,
    NavComponent,
    SidbarComponent,
    AcceuilComponent,
    ClasseComponent,
    ListeclasseComponent,
    AjoutCycleComponent,
    ListcycleComponent,
    AjoutEleveComponent,
    ListeEleveComponent,
    ListeParentComponent,
    AjouMatComponent,
    ListMatComponent,
    AjoutProfComponent,
    ListProfComponent,
    ListeSemestreComponent,
    MenuExamComponent,
    AjoutSemComponent,
    NoteComponent,
    BulttinComponent,

   
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDL1tVC46vxmQ-ijpX1WenjjSv_qVmy3S0'
    
    }),
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger', // set defaults here
    }),
    RouterModule,
    NgxPrintModule,
    
    
    
    

    
    
    
    

  ],
  providers: [
   
    {provide: APP_BASE_HREF, useValue : '/' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
