import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { isEmpty, Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})

export class ListPage implements OnInit {

  usuarios:Observable<any>|any;
  prueba:Observable<any>|any;

  @ViewChild(IonList) ionList:IonList|any;

  constructor(private dataService:DataService) { }

  ngOnInit() {
   //Obtener Servico para usar con el ASYNC EN EL HTML 
   this.usuarios=this.dataService.getUsuarios();
   //
    //OBTENER DATOS DEL SERVICIO para Monstrar en el log y Hacer Otras Funciones 
    this.dataService.getUsuarios().subscribe(data=>{
     //Obteniedo el numero de datos en el arreglo
     this.prueba=data;
     let valor=this.prueba.length;
     if(valor==10){
       console.log(valor+"  Cargaron bien los datos");
     }else{
      console.log(valor+" No cargo el Arreglo");
     }
     console.log();
       this.prueba.forEach((x:any) => {
         console.log(x.name);
       });
    });
 
  }
  
  favorite(user:any){
    this.ionList.closeSlidingItems();
   console.log('Favorite',user);
  // alert('Favorite'+":"+user);
  }

  share(user:any){
    this.ionList.closeSlidingItems();
    console.log('Favorite',user);
   console.log('share',user);
   //alert('share'+":"+user);
  }

  delete(user:any){
    this.ionList.closeSlidingItems();
    console.log('Favorite',user);
    console.log('delete',user);
    //alert('delete'+":"+user);
   }


}
