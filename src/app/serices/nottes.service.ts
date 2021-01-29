import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NottesService {

  constructor(private HttpClient:HttpClient) { }

  Ajout_Note(notes){
  
    return this.HttpClient.post<any>(`${environment.myApi}/api/ajout_note`,notes);
  }

  RechMat(val){
  
    return this.HttpClient.get<any>(`${environment.myApi}/api/AppByVal/${val}`);
  }

  RechNote(id:number){
  
    return this.HttpClient.get<any>(`${environment.myApi}/api/getNote/${id}`);
  }
  
  Rech(matricule){
  
    return this.HttpClient.get<any>(`${environment.myApi}/api/getNoteByMat/${matricule}`);
  }

  Bulttin(matricule,sem){
  
    return this.HttpClient.get<any>(`${environment.myApi}/api/getNoteByMatSem/${matricule}/${sem}`);
  }
  Moy(matricule,sem){
  
    return this.HttpClient.get<any>(`${environment.myApi}/api/getMoy/${matricule}/${sem}`);
  }
  Somme(matricule,sem){
  
    return this.HttpClient.get<any>(`${environment.myApi}/api/getSomme/${matricule}/${sem}`);
  }

  SommeMoy(matricule,sem){
  
    return this.HttpClient.get<any>(`${environment.myApi}/api/getMoyPart/${matricule}/${sem}`);
  }
  SommeCoef(matricule,sem){
  
    return this.HttpClient.get<any>(`${environment.myApi}/api/getCoef/${matricule}/${sem}`);
  }
  SommeNC(matricule,sem){
  
    return this.HttpClient.get<any>(`${environment.myApi}/api/getSommeNC/${matricule}/${sem}`);
  }
  getE(matricule){
  
    return this.HttpClient.get<any>(`${environment.myApi}/api/getMatt/${matricule}`);
  }
  modifier(id:number,data){
    return this.HttpClient.put<any>(`${environment.myApi}/api/edite_Note/${id}`,JSON.stringify(data));

  }

  

}
