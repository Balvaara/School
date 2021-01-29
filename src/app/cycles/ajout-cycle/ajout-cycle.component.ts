import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CyclesService } from 'src/app/serices/cycles.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout-cycle',
  templateUrl: './ajout-cycle.component.html',
  styleUrls: ['./ajout-cycle.component.scss']
})
export class AjoutCycleComponent implements OnInit {
  Form: FormGroup;
  constructor(private serviceCycle:CyclesService,
    private router:Router) { }

  ngOnInit() {
    this.Form = new FormGroup({
      lib: new FormControl('')
    })
  }
  OnSub(){

    const cycle={
      libelle:this.Form.value.lib
      
    }
    // console.log(user);
    this.serviceCycle.CreCycle(cycle).subscribe(data=>{
      alert(JSON.stringify (data["message"]));
      this.router.navigate(['Home/listCycle']);
    // console.log(this.ajouter.value.profil);
      
    },
    error=>{
      alert(JSON.stringify (error["message"]))
    }
    )
  


}

}
