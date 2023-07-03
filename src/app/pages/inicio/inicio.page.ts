import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Componente } from 'src/app/interface/interfaces';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes:Observable<Componente[]>|any;

  constructor(private menu:MenuController,
              private dataService:DataService) { }

  ngOnInit() {
    this.componentes=this.dataService.getMenu();
  }

  mostrarMenu(){
   this.menu.open("first");
  }
}
