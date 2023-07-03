import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  constructor(private actionSheetCtrl:ActionSheetController) { }

  ngOnInit() {
  }


  onClick(){

    this.presentActionSheet();
  }
   async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Albunes',
      backdropDismiss:false,
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon:'trash-outline',
          cssClass:'rojo',
          handler() {
              alert("Hola Mundo!");
              console.log("Prueba Funcional Criminal");
          },
        },
        {
          text: 'Share',
          icon:'share-outline',
          data: {
            action: 'share',
          },
        },
        {
          text: 'Favorite',
          icon:'heart-outline',
          data: {
            action: 'cancel',
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          icon:'close-circle-outline',
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    await actionSheet.present();

  }
  alertas(){
   alert("Hola Mundos!");
  }
}


