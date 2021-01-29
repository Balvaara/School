import { Component, OnInit } from '@angular/core';
import { SemestreService } from 'src/app/serices/semestre.service';

@Component({
  selector: 'app-liste-semestre',
  templateUrl: './liste-semestre.component.html',
  styleUrls: ['./liste-semestre.component.scss']
})
export class ListeSemestreComponent implements OnInit {
  allSem:any;
  constructor(private servicesemestre:SemestreService) { }

  ngOnInit() {
    this.servicesemestre.listSem().subscribe(
      data=>{this.allSem=data['hydra:member'];
       console.log(data);
    }
       )
  }
  

}
