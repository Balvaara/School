import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ParrentService {

  constructor(private HttpClient:HttpClient) { }

  listParrent(){
  
    return this.HttpClient.get(`${environment.myApi}/api/listParrent`);
  }
  RechById(id:number){
  
    return this.HttpClient.get<any>(`${environment.myApi}/api/listparrents/${id}`);
  }
  modifier(id:number,data){
    return this.HttpClient.put<any>(`${environment.myApi}/api/edite_parrent/${id}`,JSON.stringify(data));

  }
}
