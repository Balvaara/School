import { Component, OnInit } from '@angular/core';
import { MatiereService } from 'src/app/serices/matiere.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-list-mat',
  templateUrl: './list-mat.component.html',
  styleUrls: ['./list-mat.component.scss']
})
export class ListMatComponent implements OnInit {
allMat:any
Form: FormGroup;
libelle='';
coef='';
id:any;
libelleChange;
coefChange;


  constructor(private matiere:MatiereService) { }

  ngOnInit() {
    this.matiere.ListMat().subscribe(
      data=>{this.allMat=data['hydra:member'];
      //  console.log(data);
    }
    
       ),
       this.Form = new FormGroup({
        libelle: new FormControl(''),
        coef: new FormControl(''),
        id: new FormControl(''),
      }),
       this.onChanges();
  }
  onChanges(): void {
    this.Form.get('id').valueChanges.subscribe(val => {
      // console.log(val);
     
      this.editMat(val);
    });
  }
  editMat(val){
    this.matiere.RechNumero(val).subscribe(
      data=>{
        if (data) {
           const matiere = data ;

           this.id=matiere.id
           this.libelle =matiere.libelle;
          //  this.idc =matiere.id;
           this.coef =matiere.coef;
          // console.log(data)
         
  
            // console.log(this.cyc);
    
           this.Form.get('libelle').enable();
           this.Form.get('id').disable();
            this.Form.get('coef').enable();
      
        //  this.ajouter.get('profil').disable();
    
    
    
          }
      }
    )

  }

  OnSub(){
    //  console.log( this.Form.value.cy)
    //  console.log( this.cyc)
    if (this.Form.value.libelle=='') {
  
        this.libelleChange=this.libelle;
    }
    else{
  
      this.libelleChange=this.Form.value.libelle;
  
    }
    if (this.Form.value.coef=='') {
      this.coefChange=this.coef;
    }
    else{
      this.coefChange=this.Form.value.coef
    }
        // console.log( this.cycleChange)
  
    const matieres={
      libelle:this.libelleChange,
        coef:parseInt(this.coefChange)
  
    }
    // console.log(matieres);
    this.matiere.modifier(this.id,matieres).subscribe(
      data=>{
        alert(JSON.stringify (data["message"]));
        this.matiere.ListMat().subscribe(
          data=>{this.allMat=data['hydra:member'];
          //  console.log(data);
        }
        
           )
      }
    )
  
    }
  
    Action(id:number){
      this.matiere.suppression(id).subscribe(
        data=>{
          alert(JSON.stringify(data["message"]))
          this.matiere.ListMat().subscribe(
            data=>{this.allMat=data['hydra:member'];
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
