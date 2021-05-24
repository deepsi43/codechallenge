import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  constructor() { }
   downloadPDF(){
     const doc = new jsPDF();
      doc.text('some text here',10,10);
      doc.save('Test.pdf');
   }
  ngOnInit() {
  }

}
