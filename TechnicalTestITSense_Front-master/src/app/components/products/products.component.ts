import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/models/products/produtc';
import { SatusProduct } from 'src/app/models/products/status-product';
import {  ProductService} from "src/app/services/product.service";
import { StatusProductService } from "src/app/services/status-product.service"; 
import { AlertService } from "src/app/services/alert.service";


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  // product: Product = {
  //   idProduct: 2,
  //   nameProduct: "Product 8",
  //   idStatusProduct: 2
 
 
  formGroup = new FormGroup({
    nameProduct: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(30),
    ]),
  });
 

  _updateProduct: Product = null;
  _statusProduct:  SatusProduct[];
  _products: Product[];
  _quantityProducts:number = 0;
  _idFilterStatusProduct: number = 0;
  _filteredProducts: Product[];
  _controlStart:boolean = false;
  constructor(
     private _productService: ProductService,
     private _statusProductService: StatusProductService,
     private _alertService: AlertService) { }

 ngOnInit(): void {
 this.getProducts();
 this.getStatusProducts();
 }

 async getStatusProducts() {
  this._statusProductService.getStatusProducts().subscribe((result) => {
    this._statusProduct = result;
   
  });
 }

 async getProducts() {
  this._productService.getProducts().subscribe((result) => {
    if(!this._controlStart){
      this._quantityProducts = result.length;      
      this._products = result;
      this._filteredProducts = result; 
      this._controlStart = true;
    }else{
      if(this._idFilterStatusProduct == 0){
        this._quantityProducts = result.length;      
        this._products = result;
        this._filteredProducts = result; 
      }else{
        this._products = result; 
        this.filterProducts(this._idFilterStatusProduct);
      }
    }
  
  });
 }

async getProductById() {
  this._productService.getProductById(2).subscribe((result) => {
   
  });
}

 async createProduct(){
  if (this.formGroup.invalid) {
    return;
  }
  this._productService.createProduct(this.formGroup.controls["nameProduct"].value).subscribe((result) => {    
       this._alertService.littleAlertSuccess("Se creo el producto");
    this. getProducts();
    this.formGroup.reset();
  
  });
 }

 async updateProduct() {
  let data = <Product>this._updateProduct;
  this._productService.updateProduct(this._updateProduct).subscribe((result) => {

  });
   
 }

 async changeStatusProduct(event) {
    let idProduct:number = event.currentTarget.dataset.idproduct;
    let idStatusProduct:number = event.currentTarget.value;
  this._productService.changeStatusProduct(idProduct,idStatusProduct).subscribe((result) => {
    if(result.success){
      this._alertService.littleAlertSuccess("Se actualizo el estado del producto");
      this. getProducts();
    }
  });
 }

  filterProducts(idStatusProduct: number) {
    this._idFilterStatusProduct = idStatusProduct;
    if( this._idFilterStatusProduct == 0){
      this._filteredProducts = this._products;
      this._quantityProducts = this._products.length;     
    }else{
      this._filteredProducts = this._products.filter(x=> x.idStatusProduct == idStatusProduct);
      this._quantityProducts = this._filteredProducts.length;
    }
 }

}


