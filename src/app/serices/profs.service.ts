import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfsService {

  constructor(private HttpClient:HttpClient) { }

  AjoutProf(prof){
  
    return this.HttpClient.post<any>(`${environment.myApi}/api/ajouter_prof`,prof);
  }

  listProf(){
  
    return this.HttpClient.get(`${environment.myApi}/api/professeurs`);
  }
  RechById(id:number){
  
    return this.HttpClient.get<any>(`${environment.myApi}/api/getProf/${id}`);
  }
  modifier(id:number,prof){
    return this.HttpClient.put<any>(`${environment.myApi}/api/edite_prof/${id}`,prof);

  }
  suppression(id:number){
    return this.HttpClient.delete(`${environment.myApi}/api/delete_prof/${id}`);
  }

}
