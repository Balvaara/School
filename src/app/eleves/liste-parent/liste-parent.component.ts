import { Component, OnInit } from '@angular/core';
import { ParrentService } from 'src/app/serices/parrent.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-liste-parent',
  templateUrl: './liste-parent.component.html',
  styleUrls: ['./liste-parent.component.scss']
})
export class ListeParentComponent implements OnInit {
allparrent;
Form: FormGroup;
prenomP='';
nomP='';
adresse='';
tel=''
id:any
prenomChange;
nomChange;
adresseChange;
telChange
  constructor(private parent:ParrentService) { }

  ngOnInit() {
    this.Form = new FormGroup({
      prenomP: new FormControl(''),
      nomP: new FormControl(''),
      adresse: new FormControl(''),
      tel: new FormControl(''),
      id: new FormControl('')


    }),
    this.parent.listParrent().subscribe(
      data=>{
        this.allparrent=data
      }
    ),
    this.onChanges();
  }

  onChanges(): void {
    this.Form.get('id').valueChanges.subscribe(val => {
      // console.log(val);
     
      this.editParrent(val);
    });
  }


  editParrent(val){
    this.parent.RechById(val).subscribe(
      data=>{
        if (data) {
           const eleve = data ;
           this.prenomP=eleve.prenomP
           this.nomP=eleve.nomP
           this.adresse=eleve.adresse
           this.tel=eleve.tel
           this.id=eleve.id
          
           this.Form.get('id').enable();
           this.Form.get('prenomP').enable();
           this.Form.get('nomP').enable();
           this.Form.get('adresse').enable();
           this.Form.get('tel').enable();
         

      }
       

    }
    )}


  OnSub(){
    if (this.Form.value.prenomP=='') {
      this.prenomChange=this.prenomP
    }else{
      this.prenomChange=this.Form.value.prenomP;
    }

    if (this.Form.value.nomP=='') {
      this.nomChange=this.nomP
    }else{
      this.nomChange=this.Form.value.nomP;
    }

    if (this.Form.value.adresse=='') {
      this.adresseChange=this.adresse
    }else{
      this.adresseChange=this.Form.value.adresse;
    }

    if (this.Form.value.tel=='') {
      this.telChange=this.tel
    }else{
      this.telChange=this.Form.value.tel;
    }

    const parrent={
      prenomP:this.prenomChange,
      nomP:this.nomChange,
      adresse:this.adresseChange,
      tel:this.telChange,
    
    }
    // console.log(parrent);
    this.parent.modifier(this.id,parrent).subscribe(
      data=>{
        alert(JSON.stringify(data["message"]))
        this.parent.listParrent().subscribe(
          data=>{this.allparrent=data;
          //  console.log(data);
        }
           )
        
       
      })
   
  }

  

}
