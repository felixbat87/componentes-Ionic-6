import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(private  modalCtrl: ModalController) { }

  ngOnInit() {
  }


  async mostarModal(){

    const modal=await this.modalCtrl.create({

       component:ModalInfoPage,
       
       componentProps:{

        nombre:'Fernando',
        pais:'Jamaica'

       }
      
    });
    
    

    await modal.present();

    //const {data}=await modal.onDidDismiss();
    const {data}=await modal.onWillDismiss();
    console.log('onWillDismiss');
    console.log(data);

    


  }

}
