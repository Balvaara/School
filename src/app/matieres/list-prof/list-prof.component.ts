import { Component, OnInit } from '@angular/core';
import { ProfsService } from 'src/app/serices/profs.service';
import { FormGroup, FormControl } from '@angular/forms';
import { MatiereService } from 'src/app/serices/matiere.service';
import { Matiere } from 'src/app/modules/matiere';

@Component({
  selector: 'app-list-prof',
  templateUrl: './list-prof.component.html',
  styleUrls: ['./list-prof.component.scss']
})
export class ListProfComponent implements OnInit {
allProf;
Form: FormGroup;
prenom='';
nom=''
adresse=''
tel=''
mat=''
datenessiance=''
lieunaissance=''
id:any
Cprenom;
Cnom;
Cadresse;
Ctel;
Cmat;
Cdatenessiance;
Clieunaissance;
allMat
idMat
matieres:any=[]
  Mymat:any=[]
may:Matiere
  constructor(private prof:ProfsService,
    private matiere:MatiereService) { }

  ngOnInit() {
    this.matiere.ListMat().subscribe(
      data=>{this.allMat=data['hydra:member'];
      //  console.log(data);
    }
    
       ),
    this.prof.listProf().subscribe(
      data=>{
        this.allProf=data["hydra:member"]
        console.log(data)
      }
    ),
    this.Form = new FormGroup({
      prenom: new FormControl(''),
      nom: new FormControl(''),
      adresse: new FormControl(''),
      tel: new FormControl(''),
      mat: new FormControl(''),
      datenessiance: new FormControl(''),
      lieunaissance: new FormControl(''),
      id: new FormControl('')
    }),
    this.onChanges();
    
  }

  onChanges(): void {
    this.Form.get('id').valueChanges.subscribe(val => {
      // console.log(val);
     
      this.editProf(val);
    });
  }

  editProf(val){
    this.prof.RechById(val).subscribe(
      data=>{
        if (data) {
           const professeur = data ;
         console.log(data)
           this.id=professeur.id
           this.prenom =professeur.prenom;
           this.nom =professeur.nom;
           this.adresse =professeur.adressePr;
           this.datenessiance =professeur.datenessaince;
           this.lieunaissance =professeur.lieunessaince;
           this.tel =professeur.telPr;
           this.mat =professeur.mats;

           
           this.idMat =professeur.mats.id;
         

  
            // console.log(this.Mymat );
    
           this.Form.get('prenom').enable();
           this.Form.get('id').disable();
           this.Form.get('nom').enable();
           this.Form.get('adresse').enable();
           this.Form.get('datenessiance').enable();
           this.Form.get('lieunaissance').enable();
           this.Form.get('tel').enable();
           this.Form.get('mat').enable();
      
        //  this.ajouter.get('profil').disable();
    
    
    
          }
      }
    )
    

  }

  OnSub(){
   
    if (this.Form.value.prenom=='') {
      this.Cprenom=this.prenom;
    }else{
      this.Cprenom=this.Form.value.prenom;
    }
    if (this.Form.value.nom=='') {
      this.Cnom=this.nom;
    }else{
      this.Cnom=this.Form.value.nom;
    }
    if (this.Form.value.adresse=='') {
      this.Cadresse=this.adresse;
    }else{
      this.Cadresse=this.Form.value.adresse;
    }
    if (this.Form.value.tel=='') {
      this.Ctel=this.tel;
    }else{
      this.Ctel=this.Form.value.tel;
    }
    if (this.Form.value.datenessiance=='') {
      this.Cdatenessiance=this.datenessiance;
    }else{
      this.Cdatenessiance=this.Form.value.datenessiance;
    }
    if (this.Form.value.lieunaissance=='') {
      this.Clieunaissance=this.lieunaissance;
    }else{
      this.Clieunaissance=this.Form.value.lieunaissance;
    }
    if (this.Form.value.mat=='') {
      this.Mymat=this.mat;
    }else{
      this.matieres=this.Form.value.mat
      
      for (let $i = 0; $i < this.matieres.length; $i++) {
        //  const tab = this.matieres[$i];
        this.Mymat[$i]=`api/matieres/`+this.matieres[$i];
      }
      console.log(this.Mymat)
    }

    const Prof={
      prenom:this.Cprenom,
      nom:this.Cnom,
      adressePr:this.Cadresse,
      telPr:this.Ctel,
      datenessaince:this.Cdatenessiance,
      lieunessaince:this.Clieunaissance,
      mats:[this.Mymat]
      
    }
   console.log(Prof)
    // this.prof.modifier(this.id,Prof).subscribe(
    //   data=>{
    //     alert(JSON.stringify(data["message"]))
    //     this.prof.listProf().subscribe(
    //       data=>{
    //         this.allProf=data["hydra:member"]
    //       }
    //     )
    //   })
  }

  Action(id:number){
    this.prof.suppression(id).subscribe(
      data=>{
        alert(JSON.stringify(data["message"]))
        this.prof.listProf().subscribe(
          data=>{
            this.allProf=data["hydra:member"]
            // console.log(data)
          }
        )
      },
      
          error=>{
            
            alert( JSON.stringify (error["message"]))
            
          }
    
    )


  }
}
