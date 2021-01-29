import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatiereService } from 'src/app/serices/matiere.service';
import { Routes, Router } from '@angular/router';

@Component({
  selector: 'app-ajou-mat',
  templateUrl: './ajou-mat.component.html',
  styleUrls: ['./ajou-mat.component.scss']
})
export class AjouMatComponent implements OnInit {
  Form: FormGroup;
  constructor(private matiere:MatiereService,private router:Router) { }

  ngOnInit() {
    this.Form = new FormGroup({
      libelle: new FormControl(''),
      coef: new FormControl('')
    })
  }
  OnSub(){
    const matiere={
      libelle:this.Form.value.libelle,
      coef:parseInt( this.Form.value.coef),
    }
    // console.log(user);
    this.matiere.AjoutMat(matiere).subscribe(data=>{
      alert(JSON.stringify (data["message"]));
      this.router.navigate(['Home/listMat']);
    // console.log(this.ajouter.value.profil);
  
    },
    error=>{
      alert(JSON.stringify (error["message"]))
    }
    )
}
}
