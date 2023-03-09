import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { SatusProduct } from "src/app/models/products/status-product";
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StatusProductService {

  constructor(private _http: HttpClient) { }

  headers = new HttpHeaders();

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",          
    })
  };

  getStatusProducts(): Observable<SatusProduct[]>  {
    const statusProducts = this._http
    .get<SatusProduct[]>(
      `${environment.TechnicalTestITSenseApiUrl}/StatusProducts`
      ,this.httpOptions)
    .pipe(map((responseProducts: SatusProduct[]) => responseProducts));
  return statusProducts;
  }
}
