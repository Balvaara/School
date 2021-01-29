import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EleveService {

  constructor(private HttpClient:HttpClient) { }

  Ajout_Elev(eleve){
  
    return this.HttpClient.post<any>(`${environment.myApi}/api/new_eleve`,eleve);
  }
  listEleves(){
  
    return this.HttpClient.get(`${environment.myApi}/api/eleves`);
  }
  RechById(id:number){
  
    return this.HttpClient.get<any>(`${environment.myApi}/api/getEleve/${id}`);
  }
  modifier(id:number,data){
    return this.HttpClient.put<any>(`${environment.myApi}/api/edite_eleve/${id}`,JSON.stringify(data));

  }
  suppression(id:number){
    return this.HttpClient.delete(`${environment.myApi}/api/delete_eleve/${id}`);
  }

  RechMat(matricule){
  
    return this.HttpClient.get<any>(`${environment.myApi}/api/eleves?matricule=${matricule}`);
  }
  
}
