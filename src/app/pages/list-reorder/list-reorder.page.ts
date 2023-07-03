import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  arreglos:string[] = ['arreglo1','arreglo2','arreglo3','arreglo4','arreglo5'];
  
  reorderDisable:boolean = true;

  constructor() { }

  ngOnInit() {
  }



  doReorder(event:any){

    console.log(event);
    //cortar Arreglo 
    const itemMover=this.arreglos.splice(event.detail.from,1)[0];
    //Insertar Arreglo
    this.arreglos.splice(event.detail.to,0,itemMover);
    //evento de Realizacion Completa de Detalles
    event.detail.complete();
    console.log(this.arreglos);

  }

}
