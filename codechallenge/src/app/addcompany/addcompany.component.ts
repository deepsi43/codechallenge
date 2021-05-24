import { Component, OnInit } from '@angular/core';
import {Http,Response ,Headers} from '@angular/http';
@Component({
  selector: 'app-addcompany',
  templateUrl: './addcompany.component.html',
  styleUrls: ['./addcompany.component.css']
})
export class AddcompanyComponent implements OnInit {

  constructor(private http:Http) { }
  companyObj:object =[];
  addNewCompany = function(company){
    this.companyObj = {
      "name":company.name,
      "GST":company.GST
    }
this.http.post("http://localhost:5555/companies/",this.companyObj).subscribe((res:Response)=>{
  console.log(res);
  })



  }
  ngOnInit() {
    
  }

}
