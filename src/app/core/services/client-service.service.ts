import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseModel } from '../models/base-model';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {
  readonly baseURL: string = "https://dev-movies-news-apis.pantheonsite.io/wp-json/clients/v1/";

  constructor(private http: HttpClient) { }

  // method for getting the list of clients
  getClients(): Observable<BaseModel<Client[]>> {
    return this.http.get<BaseModel<Client[]>>(this.baseURL + 'clients');
  }

  addClient(client: Client, id?: string):Observable<BaseModel<null>> {
    if(!id) {
      return this.http.post<BaseModel<null>>(this.baseURL + 'add-client', client)
    } else {
      return this.http.put<BaseModel<null>>(this.baseURL + 'update-client/' + id, client)
    }
  }

  getSingleClient(id: string): Observable<Client> {
    return this.http.get<Client>(this.baseURL + 'client/' + id)
  }
}
