import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {

  @Input() nombre:string|any;
  @Input() pais:string|any;

  constructor(private modalCtrl:ModalController) { }

  ngOnInit() {

    

  }

  salirSinArgumentos(){
   this.modalCtrl.dismiss();
  }


  salirSinConArgumentos(){
    this.modalCtrl.dismiss({
      nombre:'Felix',
      pais:'Namekusein'
    });
  }

}
