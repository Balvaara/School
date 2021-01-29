import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MatiereService {

  constructor(private HttpClient:HttpClient) { }

  AjoutMat(matiere){
  
    return this.HttpClient.post<any>(`${environment.myApi}/api/ajouter_Mat`,matiere);
  }

  ListMat(){
  
    return this.HttpClient.get(`${environment.myApi}/api/matieres`);
  }
  RechNumero(id:number){
  
    return this.HttpClient.get<any>(`${environment.myApi}/api/getMat/${id}`);
  }

  modifier(id:number,data){
    return this.HttpClient.put<any>(`${environment.myApi}/api/edite_mat/${id}`,JSON.stringify(data));

  }
  suppression(id:number){
    return this.HttpClient.delete(`${environment.myApi}/api/delete_mat/${id}`);
  }
}
