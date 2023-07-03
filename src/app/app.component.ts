import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Componente } from './interface/interfaces';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  Componentes:Observable<Componente[]>|any;
  constructor(private dataService:DataService) {}
  
  ngOnInit() {
   
    this.Componentes = this.dataService.getMenu();

  }

}
