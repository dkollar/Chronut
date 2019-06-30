import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Client } from '../_models/client';
import { PaginatedResult } from '../_models/pagination';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getClients(page?, itemsPerPage?, clientParams?): Observable<PaginatedResult<Client[]>> {
    const paginatedResult: PaginatedResult<Client[]> = new PaginatedResult<Client[]>();

    let params = new HttpParams();

    if (page != null && itemsPerPage != null) {
      params = params.append('pageNumber', page);
      params = params.append('pageSize', itemsPerPage);
    }

    if (clientParams != null) {``
      params = params.append('orderBy', clientParams.orderBy);
    }

    return this.http.get<Client[]>(this.baseUrl + 'clients', { observe: 'response', params })
      .pipe(
        map(response => {
          paginatedResult.result = response.body;
          if (response.headers.get('Pagination') != null) {
            paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
          }
          return paginatedResult;
        })
      );
  }

}
