import { Component, OnInit } from '@angular/core';
import { EleveService } from 'src/app/serices/eleve.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ClasseService } from 'src/app/serices/classe.service';
import { ifStmt } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-liste-eleve',
  templateUrl: './liste-eleve.component.html',
  styleUrls: ['./liste-eleve.component.scss']
})
export class ListeEleveComponent implements OnInit {
allEleve:any
Form: FormGroup;
id:any;
matricule=''
prenom=''
nom=''
residence=''
dateness:any
lieuness=''
cl=''
mydi:any
prenomChange;
nomChange;
residenceChange;
datenessChange:any;
lieunessChange;
clChange;
classes:any
  constructor(private eleve:EleveService,
    private classe:ClasseService) { }

  ngOnInit() {
   
    this.Form = new FormGroup({
      prenom: new FormControl(''),
      nom: new FormControl(''),
      residence: new FormControl(''),
      dateness: new FormControl(''),
      lieuness: new FormControl(''),
      prenomP: new FormControl(''),
      nomP: new FormControl(''),
      adresse: new FormControl(''),
      cl: new FormControl(''),
      tel: new FormControl(''),
      matricule: new FormControl(''),
      id: new FormControl('')


    }),
    this.eleve.listEleves().subscribe(
      data=>{this.allEleve=data['hydra:member'];
      //  console.log(data);
    }
       ),
       this.onChanges();
  }


  onChanges(): void {
    this.Form.get('id').valueChanges.subscribe(val => {
      // console.log(val);
     
      this.editEleve(val);
    });
  }


  editEleve(val){
    this.eleve.RechById(val).subscribe(
      data=>{
        if (data) {
           const eleve = data ;
          // console.log(data)
           this.id=eleve.id
           this.prenom =eleve.prenom;
           this.nom =eleve.nom;
           this.residence =eleve.residence;
           this.dateness =eleve.dateness;
           this.lieuness =eleve.lieuness;
           this.matricule =eleve.matricule;
           this.mydi =eleve.myclasses.id;
           this.cl =eleve.myclasses;

  
            //  console.log(this.dateness );
    
           this.Form.get('prenom').enable();
           this.Form.get('id').disable();
           this.Form.get('nom').enable();
           this.Form.get('residence').enable();
           this.Form.get('dateness').enable();
           this.Form.get('lieuness').enable();
           this.Form.get('matricule').disable();
           this.Form.get('cl').enable();
      
        //  this.ajouter.get('profil').disable();
    
    
    
          }
      }
    ),
    this.classe.listClase().subscribe(
      data=>{this.classes=data['hydra:member'];
        console.log(this.classes);
       
      }
       )

  }

  OnSub(){
    if (this.Form.value.prenom=='') {
      this.prenomChange=this.prenom
    }else{
      this.prenomChange=this.Form.value.prenom;
    }

    if (this.Form.value.nom=='') {
      this.nomChange=this.nom
    }else{
      this.nomChange=this.Form.value.nom;
    }

    if (this.Form.value.residence=='') {
      this.residenceChange=this.residence
    }else{
      this.residenceChange=this.Form.value.residence;
    }

    if (this.Form.value.dateness=='') {
      this.datenessChange=this.dateness
    }else{
      this.datenessChange=this.Form.value.dateness;
    }

    if (this.Form.value.lieuness=='') {
      this.lieunessChange=this.lieuness
    }else{
      this.lieunessChange=this.Form.value.lieuness;
    }


    if (this.Form.value.cl=='') {
      this.clChange=this.mydi
    }else{
      this.clChange=this.Form.value.cl;
    }
  //  console.log(this.datenessChange);
      const eleve={
        prenom:this.prenomChange,
        nom:this.nomChange,
        residence:this.residenceChange,
        dateness:this.datenessChange,
        lieuness:this.lieunessChange,
        myclasses:`api/classes/${this.clChange}`,
      }

      this.eleve.modifier(this.id,eleve).subscribe(
        data=>{
          alert(JSON.stringify(data["message"]))
          this.eleve.listEleves().subscribe(
            data=>{this.allEleve=data['hydra:member'];
            //  console.log(data);
          }
             )
        })
  }

  Action(id:number){
    this.eleve.suppression(id).subscribe(
      data=>{
        alert(JSON.stringify(data["message"]))
        this.eleve.listEleves().subscribe(
          data=>{this.allEleve=data['hydra:member'];
          //  console.log(data);
        }
           )
      
       
      },
      
          error=>{
            
            alert( JSON.stringify (error["message"]))
            
          }
    
    )


  }
}
