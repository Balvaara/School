import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NottesService } from '../serices/nottes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-exam',
  templateUrl: './menu-exam.component.html',
  styleUrls: ['./menu-exam.component.scss']
})
export class MenuExamComponent implements OnInit {
  Form: FormGroup;
  variable : any = false;
  allNote
  valeur=''
  vaeurChange
  id:any
  eleve
  constructor(private note:NottesService,
    private router:Router) { }

  ngOnInit() {
    this.Form = new FormGroup({
      matricule: new FormControl(''),
      valeur: new FormControl(''),
      id: new FormControl(''),

    }),
    this.onChanges();
  }
  onChanges(): void {
    this.Form.get('id').valueChanges.subscribe(val => {
      // console.log(val);
     
      this.editNote(val);
    });
  }


  editNote(val){
    this.note.RechNote(val).subscribe(
      data=>{
        if (data) {
           const note = data ;
           this.valeur=note.valeur,
           this.id=note.id

           this.Form.get('id').disable();
        
      }})
      
  }

  
  Editer(){
    if (this.Form.value.valeur=='') {
      this.vaeurChange=this.valeur
    }else{
      this.vaeurChange=this.Form.value.valeur;
    }
    const note={
      valeur:this.vaeurChange,
     
    }
    this.note.modifier(this.id,note).subscribe(
      data=>{
        alert(JSON.stringify(data["message"]))
        this.router.navigate(['/Home/bulttin']);
      
      })
    
  }
  OnSub(){
  
    this.variable = !this.variable;
      this.note.Rech(this.Form.value.matricule).subscribe(
        data=>{
          this.allNote=data
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
