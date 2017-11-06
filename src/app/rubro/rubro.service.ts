import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/catch';

import 'rxjs/add/operator/map'
import {Observable} from 'rxjs/Observable';

@Injectable()
export class RubroService {

  private apiUrl = 'http://192.168.0.5:8080/api';

  constructor(private http: Http) {
  }

  findAll(path: string): Observable<any[]> {
    return this.http.get(`${this.apiUrl}/${path}`).map((res: Response) => res.json())
    .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  findById(path: string, id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${path}/${id}`)
    .map((res: Response) => res.json())
    .catch((error: any) => Observable.throw(error.json().error || 'Error'));
  }

  save(data: any, path: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/${path}`, data)
    .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  deleteById(id: number, path: string): Observable<boolean> {
    return this.http.delete(`${this.apiUrl}/${path}/${id}`)
    .map((res: Response) => res.json())
    .catch((error: any) => Observable.throw(error || 'Server error'));
  }

}
