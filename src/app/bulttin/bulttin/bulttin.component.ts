import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SemestreService } from 'src/app/serices/semestre.service';
import { NottesService } from 'src/app/serices/nottes.service';

@Component({
  selector: 'app-bulttin',
  templateUrl: './bulttin.component.html',
  styleUrls: ['./bulttin.component.scss']
})
export class BulttinComponent implements OnInit {
  Form: FormGroup;
  allsem
  variable : any = false;
  allNote
  matricule=''
  somme:any
  moy:any
  sommeMoy:any
  sommeCoef:any
  sommeNC:any
  eleve:any
  constructor(private sems:SemestreService,
    private note:NottesService) { }

  ngOnInit() {
    this.Form = new FormGroup({
      matricule: new FormControl(''),
      sem: new FormControl('')    
    }),
    this.sems.listSem().subscribe(
      data=>{this.allsem=data['hydra:member'];
      // console.log(data);
    }
       )
  }

  OnSub(){
  
    this.variable = !this.variable;
      this.note.Bulttin(this.Form.value.matricule,this.Form.value.sem).subscribe(
        data=>{
          this.allNote=data
    }),
    this.note.Moy(this.Form.value.matricule,this.Form.value.sem).subscribe(
      data=>{
        this.moy=data
    }),
    this.note.Somme(this.Form.value.matricule,this.Form.value.sem).subscribe(
      data=>{
        this.somme=data
    }),
    this.note.SommeCoef(this.Form.value.matricule,this.Form.value.sem).subscribe(
      data=>{
        this.sommeCoef=data
    }),
    this.note.SommeMoy(this.Form.value.matricule,this.Form.value.sem).subscribe(
      data=>{
        this.sommeMoy=data
    }),
    this.note.SommeNC(this.Form.value.matricule,this.Form.value.sem).subscribe(
      data=>{
        this.sommeNC=data
    }),
    this.note.getE(this.Form.value.matricule).subscribe(
      data=>{
        this.eleve=data
        // console.log(this.eleve)
    }),
  error => {
    alert(JSON.stringify('Matricule n\'existe pas'))
  };

}


}
