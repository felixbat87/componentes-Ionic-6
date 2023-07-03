import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Componente } from 'src/app/interface/interfaces';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {
  publisher:string='';

  superHeroes:any[]=[];
  prueba:any[]=[];
  constructor(private dataService:DataService) { }

  ngOnInit() {
   
    this.dataService.getHeroes().subscribe(data=>{

      this.superHeroes=data;
     
    })

  }

  segmentChanged(event:any){

    // console.log(event.detail.value);
    // if ( event.detail.value === 'todos' ) {
    //   return this.publisher = '';
    // }

    this.publisher = event.detail.value;

  }


}
