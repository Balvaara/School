import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatiereService } from 'src/app/serices/matiere.service';
import { ProfsService } from 'src/app/serices/profs.service';
import { Router } from '@angular/router';
import { ArrayType } from '@angular/compiler';

@Component({
  selector: 'app-ajout-prof',
  templateUrl: './ajout-prof.component.html',
  styleUrls: ['./ajout-prof.component.scss']
})
export class AjoutProfComponent implements OnInit {
  Form: FormGroup;
  allMat:any;
  matieres:any=[]
  Mymat:any=[]
  constructor(private matiere:MatiereService,
    private prof:ProfsService,
    private router:Router) { }

  ngOnInit() {
    this.Form = new FormGroup({
      prenom: new FormControl(''),
      nom: new FormControl(''),
      adresse: new FormControl(''),
      tel: new FormControl(''),
      mat: new FormControl(''),
      datenessiance: new FormControl(''),
      lieunessiance: new FormControl('')
    }),
    this.matiere.ListMat().subscribe(
      data=>{this.allMat=data['hydra:member'];
      // console.log(data);
    }
       )
  }
  OnSub(){
   this.matieres=this.Form.value.mat
  
   for (let $i = 0; $i < this.matieres.length; $i++) {
    //  const tab = this.matieres[$i];
    this.Mymat[$i]=`api/matieres/`+this.matieres[$i];
  
 
  }
  // console.log(this.Mymat)
    const professeur={  
      prenom:this.Form.value.prenom,  
      nom:this.Form.value.nom,
      adressePr:this.Form.value.adresse,
      telPr:this.Form.value.tel,
      datenessaince:this.Form.value.datenessiance,
      lieunessaince:this.Form.value.lieunessiance,
      mats:this.Mymat
    }
 console.log(professeur);
    this.prof.AjoutProf(professeur).subscribe(data=>{
      alert(JSON.stringify (data["message"]));
      this.router.navigate(['Home/listProf']);
      
    },
    error=>{
      alert(JSON.stringify (error["message"]))
    }
    )

  }




}
