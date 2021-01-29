
import { AppComponent } from './app.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForrConnexionComponent } from './components/forr-connexion/forr-connexion.component';
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




const routes: Routes = [
  { path: '', component:ForrConnexionComponent},
  { path: 'Home', component:AcceuilComponent,
  children:
  [ 
        { path: 'classe', component:ClasseComponent},
        { path: 'listClasse', component:ListeclasseComponent},
        { path: 'cycle', component:AjoutCycleComponent},
        { path: 'listCycle', component:ListcycleComponent},
        { path: 'ajout_eleve', component:AjoutEleveComponent},
        { path: 'listeEleve', component:ListeEleveComponent},
        { path: 'listeParent', component:ListeParentComponent},
        { path: 'ajouMat', component:AjouMatComponent},
        { path: 'listMat', component:ListMatComponent},
        { path: 'ajoutProf', component:AjoutProfComponent},
        { path: 'listProf', component:ListProfComponent},
        { path: 'Menu', component:MenuExamComponent},
        
          { path: 'listSem', component:ListeSemestreComponent},
          { path: 'AjoutSem', component:AjoutSemComponent},
          { path: 'AjoutNote', component:NoteComponent},
          { path: 'bulttin', component:BulttinComponent}
       
      
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
