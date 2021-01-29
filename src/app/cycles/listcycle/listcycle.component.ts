import { Component, OnInit } from '@angular/core';
import { CyclesService } from 'src/app/serices/cycles.service';

@Component({
  selector: 'app-listcycle',
  templateUrl: './listcycle.component.html',
  styleUrls: ['./listcycle.component.scss']
})
export class ListcycleComponent implements OnInit {
  listcycle:any;
  constructor(private servicecycle:CyclesService) { }

  ngOnInit() {
    this.servicecycle.listCycle().subscribe(
      data=>{this.listcycle=data['hydra:member'];
       console.log(data);
    }
       )
  }

}
