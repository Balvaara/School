import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CyclesService } from 'src/app/serices/cycles.service';
import { ClasseService } from 'src/app/serices/classe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-classe',
  templateUrl: './classe.component.html',
  styleUrls: ['./classe.component.scss']
})
export class ClasseComponent implements OnInit {
  Form: FormGroup;
  cycles:any;
  constructor(private serviceCycle:CyclesService,
    private serviceClasse:ClasseService,
    private router:Router) { }

  ngOnInit() {
    this.Form = new FormGroup({
      lib: new FormControl(''),
      cy: new FormControl('')
    })


  this.serviceCycle.listCycle().subscribe(
    data=>{this.cycles=data['hydra:member'];
    // console.log(data);
  }
     )
  }

  OnSub(){

    const classe={
      libclasse:this.Form.value.lib,
      cycles:`api/cycles/${this.Form.value.cy}`,
    }
    // console.log(user);
    this.serviceClasse.CreClase(classe).subscribe(data=>{
      alert(JSON.stringify (data["message"]));
      this.router.navigate(['Home/listClasse']);
    // console.log(this.ajouter.value.profil);
      
    },
    error=>{
      alert(JSON.stringify (error["message"]))
    }
    )
  


}

}
