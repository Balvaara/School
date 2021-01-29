import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CyclesService {

  constructor( private HttpClient:HttpClient) { }

  CreCycle(cycle){
  
    return this.HttpClient.post<any>(`${environment.myApi}/api/ajouter_cycle`,cycle);
  }
  listCycle(){
  
    return this.HttpClient.get(`${environment.myApi}/api/cycles`);
  }
}