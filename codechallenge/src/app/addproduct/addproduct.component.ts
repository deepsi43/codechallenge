import { Component, OnInit } from '@angular/core';
import {Http,Response ,Headers} from '@angular/http';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  constructor(private http:Http) { }
  productObj:object =[];
  addNewProduct = function(product){
    this.companyObj = {
      "name":product.name,
      "cost":product.cost
    }
this.http.post("http://localhost:5555/products/",this.productObj).subscribe((res:Response)=>{
  console.log(res);
  })



  }

  ngOnInit() {
  }

}
