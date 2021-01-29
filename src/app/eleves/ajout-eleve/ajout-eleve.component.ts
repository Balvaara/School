import { Component, OnInit } from '@angular/core';
import { ClasseService } from 'src/app/serices/classe.service';
import { FormGroup, FormControl } from '@angular/forms';
import { EleveService } from 'src/app/serices/eleve.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout-eleve',
  templateUrl: './ajout-eleve.component.html',
  styleUrls: ['./ajout-eleve.component.scss']
})
export class AjoutEleveComponent implements OnInit {
  Form: FormGroup;

  constructor(private classe:ClasseService,
    private eleve:EleveService,
    private router:Router) { }
  classes:any;
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
      tel: new FormControl('')


    }),
    this.classe.listClase().subscribe(
      data=>{this.classes=data['hydra:member'];
      // console.log(data);
    }
       )
  }

  OnSub(){

    const eleve={
      prenom:this.Form.value.prenom,
      nom:this.Form.value.nom,
      residence:this.Form.value.residence,
      dateness:this.Form.value.dateness,
      lieuness:this.Form.value.lieuness,
      prenomP:this.Form.value.prenomP,
      nomP:this.Form.value.nomP,
      tel:this.Form.value.tel,
      adresse:this.Form.value.adresse,
      myclasses:`api/classes/${this.Form.value.cl}`,
    }
    // console.log(user);
    this.eleve.Ajout_Elev(eleve).subscribe(data=>{
      alert(JSON.stringify (data["message"]));
      this.router.navigate(['Home/listeEleve']);
    // console.log(this.ajouter.value.profil);
      
    },
    error=>{
      alert(JSON.stringify (error["message"]))
    }
    )
  


}


}
