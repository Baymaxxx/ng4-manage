import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
@Injectable()
export class ProjectMonitorService {

  constructor(private http: Http) { }

  getStockData(): Promise<any> {
    return this.http.get('assets/stock.json')
      .toPromise()
      .then(res => {
        return res.json();
      });
  }
}
