import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {RouterModule , Routes} from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule,MatToolbarModule,MatDialogModule,MatFormFieldModule,MatInputModule,MatButtonModule,MatGridListModule} from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AddcompanyComponent } from './addcompany/addcompany.component';
import { ViewproductsbycompanyComponent } from './viewproductsbycompany/viewproductsbycompany.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { FileuploadComponent } from './fileupload/fileupload.component';


const appRoutes: Routes = [
  //{path:'',component: PlayerdashboardComponent},
  {path:'',component:AppComponent},
  {path:'dropdown',component:DropdownComponent},
  {path:'companies', component: AddcompanyComponent},
  {path:'products', component: AddproductComponent},
  {path:'Invoice', component: InvoiceComponent}
  ] 



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DropdownComponent,
    AddproductComponent,
    AddcompanyComponent,
    ViewproductsbycompanyComponent,
    InvoiceComponent,
    FileuploadComponent,

     ],
     entryComponents: [],

  imports: [
    BrowserModule,
    FormsModule,
    MatCardModule,
    MatDialogModule,
    MatTabsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    RouterModule.forRoot(appRoutes) ,
    HttpModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
