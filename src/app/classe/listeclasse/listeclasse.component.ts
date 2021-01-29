import { Component, OnInit } from '@angular/core';
import { ClasseService } from 'src/app/serices/classe.service';
import { FormGroup, FormControl } from '@angular/forms';
import { CyclesService } from 'src/app/serices/cycles.service';
import { Classe } from 'src/app/modules/classe';

@Component({
  selector: 'app-listeclasse',
  templateUrl: './listeclasse.component.html',
  styleUrls: ['./listeclasse.component.scss']
})
export class ListeclasseComponent implements OnInit {
listclasse:any;
mod:any
Form: FormGroup;
libc='';
idc:any;
cyc='';

allcycle;
libChange;
cycleChange;
classe:Classe

  constructor(private serviceclasse:ClasseService,
    private cyclesservice:CyclesService) { }

  ngOnInit() {
    this.serviceclasse.listClase().subscribe(
      data=>{this.listclasse=data['hydra:member'];
      //  console.log(data);
    }
    
       ),
       this.cyclesservice.listCycle().subscribe(
        data=>{this.allcycle=data['hydra:member'];
        //  console.log(data);
      }
         ),
       this.Form = new FormGroup({
        lib: new FormControl(''),
        cy: new FormControl(''),
        id: new FormControl(''),
      }),
      this.onChanges();
  }

  onChanges(): void {
    this.Form.get('id').valueChanges.subscribe(val => {
      // console.log(val);
     
      this.editClasse(val);
    });
  }
  editClasse(val){
    this.serviceclasse.RechNumero(val).subscribe(
      data=>{
        if (data) {
           const classe = data ;
          // console.log(data)
           this.idc=classe.id
           this.libc =classe.libclasse;
          //  this.idc =classe.id;
           this.cyc =classe.cycles;
  
            // console.log(this.cyc);
    
           this.Form.get('lib').enable();
           this.Form.get('idc').disable();
            this.Form.get('cy').enable();
      
        //  this.ajouter.get('profil').disable();
    
    
    
          }
      }
    )

  }
  OnSub(){
  //  console.log( this.Form.value.cy)
  //  console.log( this.cyc)
  if (this.Form.value.lib=='') {

      this.libChange=this.libc;
  }
  else{

    this.libChange=this.Form.value.lib;

  }
  if (this.Form.value.cy=='') {
    this.cycleChange=this.cyc;
  }
  else{
    this.cycleChange=this.Form.value.cy
  }
      console.log( this.cycleChange)

  const classe={
    libclasse:this.libChange,
      cycles:`api/cycles/${this.Form.value.cy}`

  }
  // console.log(classe);
  this.serviceclasse.modifier(this.idc,classe).subscribe(
    data=>{
      alert(JSON.stringify (data["message"]));
      this.serviceclasse.listClase().subscribe(
        data=>{this.listclasse=data['hydra:member'];
        //  console.log(data);
      }
         )
    }
  )

  }

  Action(id:number){
    this.serviceclasse.suppression(id).subscribe(
      data=>{
        alert(JSON.stringify(data["message"]))
        this.serviceclasse.listClase().subscribe(
          data=>{this.listclasse=data['hydra:member'];
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
