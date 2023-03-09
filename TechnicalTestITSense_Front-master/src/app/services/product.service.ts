import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Product } from "src/app/models/products/produtc";
import { ResponseRequest } from "src/app/models/responseRequest/responseRequest";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _http: HttpClient) { }

 
  headers = new HttpHeaders();

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",          
    })
  };
  
  getProducts(): Observable<Product[]>  {   
    const products = this._http
    .get<Product[]>(
      `${environment.TechnicalTestITSenseApiUrl}/Products`
      ,this.httpOptions)
    .pipe(map((responseProducts: Product[]) => responseProducts));
  return products;
  }

  getProductById(idProduct: number): Observable<Product>  {
    const product = this._http
    .get<Product>(
      `${environment.TechnicalTestITSenseApiUrl}/Products/${idProduct}`
      ,this.httpOptions)
    .pipe(map((product: Product) => product));
  return product;
  };

  updateProduct(product: Product): Observable<ResponseRequest>  {
    const responseRequest = this._http
    .put<ResponseRequest>(
      `${environment.TechnicalTestITSenseApiUrl}/Products`, product
      ,this.httpOptions)
    .pipe(map((responseRequest: ResponseRequest) => responseRequest));
  return responseRequest;
  }

  createProduct(nameProduct:string): Observable<ResponseRequest>  {
    const responseRequest = this._http
    .post<ResponseRequest>(
      `${environment.TechnicalTestITSenseApiUrl}/Products`, JSON.stringify(nameProduct)
      ,this.httpOptions)
    .pipe(map((responseRequest: ResponseRequest) => responseRequest));
  return responseRequest;
  }    

  changeStatusProduct(idProduct:number, idStatusProduct:number): Observable<ResponseRequest>  {
    const responseRequest = this._http
    .patch<ResponseRequest>(
      `${environment.TechnicalTestITSenseApiUrl}/Products/${idProduct}/${idStatusProduct}`,this.httpOptions)
    .pipe(map((responseRequest: ResponseRequest) => responseRequest));
  return responseRequest;
  }

}
