import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getAllProducts(){
    return this.http.get("http://localhost:5000/products");
  }

  addUser(requestBody){
    return this.http.post("http://localhost:5000/user", requestBody);
  }

  addRanking(requestBody){
    return this.http.post("http://localhost:5000/ranking", requestBody);
  }

  getByPlayerEmail(email: string){
    return this.http.get("http://localhost:5000/user/email=" + encodeURIComponent(email));
  }
  
  getByPlayerid(id: number){
    return this.http.get("http://localhost:5000/user/id="+ id);
  }
}
