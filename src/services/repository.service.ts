import { Observable } from 'rxjs/Rx';
import { Response } from '@angular/http';
import { map } from 'rxjs/operator/map';
import { Injectable } from '@angular/core';
import * as queryString from 'query-string';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RepositoryService {

  constructor(private http: HttpClient) {}

  getRepositories(queryBuilder): Observable<Object> {
    return this.http.get(`https://api.github.com/search/repositories?q=topic:${queryString.stringify(queryBuilder)}`)
      .do((res: Response) => res)
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }
}
