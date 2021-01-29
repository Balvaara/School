import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { SemestreService } from 'src/app/serices/semestre.service';

@Component({
  selector: 'app-ajout-sem',
  templateUrl: './ajout-sem.component.html',
  styleUrls: ['./ajout-sem.component.scss']
})
export class AjoutSemComponent implements OnInit {
  Form: FormGroup;
  constructor(private serviceSem:SemestreService,
    private router:Router) { }

  ngOnInit() {
    this.Form = new FormGroup({
      libellesemestre: new FormControl('')
    })
  }
  OnSub(){

    const sem={
      libellesemestre:this.Form.value.libellesemestre
      
    }
    // console.log(user);
    this.serviceSem.CreSem(sem).subscribe(data=>{
      alert(JSON.stringify (data["message"]));
      this.router.navigate(['Home/listSem']);
    // console.log(this.ajouter.value.profil);
      
    },
    error=>{
      alert(JSON.stringify (error["message"]))
    }
    )
  


}


}
