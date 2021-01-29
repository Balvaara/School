import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClasseService {

  constructor(private HttpClient:HttpClient) { }

  CreClase(classe){
  
    return this.HttpClient.post<any>(`${environment.myApi}/api/ajouter_classe`,classe);
  }
  listClase(){
  
    return this.HttpClient.get(`${environment.myApi}/api/classes`);
  }

  RechNumero(id:number){
  
    return this.HttpClient.get<any>(`${environment.myApi}/api/getClasse/${id}`);
  }


  modifier(id:number,data){
    return this.HttpClient.put<any>(`${environment.myApi}/api/edite_classe/${id}`,JSON.stringify(data));

  }
  suppression(id:number){
    return this.HttpClient.delete(`${environment.myApi}/api/delete_classe/${id}`);
  }
}
