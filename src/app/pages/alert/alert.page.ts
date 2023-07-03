import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Console } from 'console';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }


  async presentAlert() {
    const alert = await this.alertController.create({
      backdropDismiss:false,
      header: 'Alert',
      subHeader: 'Important message',
      message: 'This is an alert!',
      buttons: ['OK'],
    });

    await alert.present();
  }


  async presentAlertMultipleButtons() {
    const alert = await this.alertController.create({
      backdropDismiss:false,
      header: 'Alert',
      subHeader: 'Important message',
      message: 'This is an alert!',
      buttons: [{
        text: 'Ok!',
        handler: () => {
          console.log('click en ok!')
        }
      },
       {
        text: 'Cancelar',
        cssClass:'rojo',
        handler: () => {
          console.log('click en cancelar')
        }
       }
    ],
    });

    await alert.present();
  }

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      header: 'Please enter your info',
      inputs: [
        {
          type:'text',
          placeholder: 'Name',
        },
        {
         type:'url',
         value: 'http://localhost'
        },
        {
          placeholder: 'Nickname (max 8 characters)',
          attributes: {
            maxlength: 8,
          },
        },
        {
          type: 'number',
          placeholder: 'Age',
          min: 1,
          max: 100,
        },
        {
          type:'date',
          min:'2022-01-12',
          max:'2022-31-12'

        },
        {
          type: 'textarea',
          placeholder: 'A little about yourself',
        },
      ],
      buttons: [{
        text: 'Cancel',
        role:'Cancel',
        cssClass:'secondary',
        handler: () =>{
          console.log('Confirm Cancel');
        }
      },
      {
        text: 'Ok',
        handler: (data:any) =>{
          console.log("Confirm Ok");
          console.log(data);
        }
      }
    
    ],
    });

    await alert.present();
  }




}
