import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SemestreService {

  constructor(private HttpClient:HttpClient) { }

  listSem(){
  
    return this.HttpClient.get(`${environment.myApi}/api/semestres`);
  }

  CreSem(sem){
  
    return this.HttpClient.post<any>(`${environment.myApi}/api/ajouter_semestre`,sem);
  }
}
