import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NottesService } from 'src/app/serices/nottes.service';
import { EleveService } from 'src/app/serices/eleve.service';
import { MatiereService } from 'src/app/serices/matiere.service';
import { SemestreService } from 'src/app/serices/semestre.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  Form: FormGroup;
prenom=''
nom=''
allSem;
allMat
appreciation=''
  constructor(private note:NottesService,
    private eleve:EleveService,
    private matiere:MatiereService,
    private sem:SemestreService,
    private router:Router) { }

  ngOnInit() {
    this.matiere.ListMat().subscribe(
      data=>{
        this.allMat=data['hydra:member']
      }
    ),
    this.sem.listSem().subscribe(
      data=>{
        this.allSem=data['hydra:member']
      }
    )
    this.Form = new FormGroup({
      prenom: new FormControl(''),
      nom: new FormControl(''),
      matricule: new FormControl(''),
      valeur: new FormControl(''),
      mat: new FormControl(''),
      sem: new FormControl(''),
      appreciation: new FormControl(''),
    }),
    this.onChanges();
    this.onChangesApp();
  }

  onChanges(): void {
    this.Form.get('matricule').valueChanges.subscribe(val => {
      // console.log(val);
     
      this.getPatnerByNinea(val);
    });

  }

  onChangesApp(): void {
    this.Form.get('valeur').valueChanges.subscribe(val => {
      // console.log(val);
     
      this.getApp(val);
    });

  }
  get f() { return this.Form.controls; }


getPatnerByNinea(matricule) {
  this.eleve.RechMat(matricule).subscribe
  (data => {
    if (data["hydra:member"][0]) {
      const eleves = data["hydra:member"][0] ;
      this.prenom =eleves.prenom;
      this.nom = eleves.nom;
      this.Form.get('prenom').disable();
      this.Form.get('nom').disable();

    } 
})
}
getApp(valeur) {
  this.note.RechMat(valeur).subscribe
  (data => {
    this.appreciation=data.libApp
    this.Form.get('appreciation').disable();
    } 
)
}


OnSub(){

  const note={
    matricule:this.Form.value.matricule,
    valeur:this.Form.value.valeur,
    appreciation:this.appreciation,
    matieres:`api/matieres/${this.Form.value.mat}`,
    sems:`api/semestres/${this.Form.value.sem}`
  }
     console.log(note);
  this.note.Ajout_Note(note).subscribe(data=>{
    alert(JSON.stringify (data["message"]));
    this.router.navigate(['Home/Menu']);
 
    
  },
  error=>{
    alert(JSON.stringify (error["message"]))
  }
  )



}
   // this.router.navigate(['Home/listeEleve']);
  // console.log(this.ajouter.value.profil);
}
