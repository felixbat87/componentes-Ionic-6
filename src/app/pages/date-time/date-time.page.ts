import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import {formatDate} from '@angular/common';
@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  fechaNaci:Date=new Date();
  mostrar=formatDate(this.fechaNaci, 'dd-MM-YYYY', 'en');

  constructor() {
   

   }

  ngOnInit() {
    console.log(this.mostrar);
  }


  cambioFecha(event:any){
    console.log(event);
    console.log(new Date (event.detail.value));
  }

}
