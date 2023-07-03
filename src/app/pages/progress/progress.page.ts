import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.page.html',
  styleUrls: ['./progress.page.scss'],
})
export class ProgressPage implements OnInit {
  valor:number=0;
  valor1:any=0;
  porcentaje1:number=0.05;
  porcentaje:number=0.05;
  porcentaje2:number=1;
  constructor() { }

  ngOnInit() {

    setInterval(()=>{

     if(this.porcentaje1>=1.0 || this.porcentaje2>=100){
      this.porcentaje1=0.05;
      this.porcentaje2=1;
     }else{
      this.porcentaje1=this.porcentaje1+0.01;
      this.valor1=(this.porcentaje1*100).toFixed(0);
      //this.porcentaje2=this.porcentaje2+3.5;
     }


    },1500)

    
  }



  rangeChange(event:any) {

  //console.log(event.detail.value);
  
   this.porcentaje=event.detail.value/100;

   this.valor=event.detail.value*1;

  }

}
