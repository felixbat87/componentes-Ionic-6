import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  loading:HTMLIonLoadingElement|any;

  constructor(private loadingCtrl: LoadingController ,private router: Router) { }

  ngOnInit() {
  }

  async showLoading() {
    this.loading = await this.loadingCtrl.create({
      message: 'Loading..',
      duration: 3000,
      spinner:"crescent",
      cssClass: 'custom-loading',
    });
    
   setTimeout(()=>{
    this.loading.dismiss();
    this.router.navigate(['/card']);
   },4000)
    this.loading.present();
  }



  async PresentLoading(message:string){

    this.loading=await this.loadingCtrl.create({
      message,
    });

    await this.loading.present();

  }

  otroMetodo(){

    this.PresentLoading("Hola Mundo");
    setTimeout(()=>{
     this.loading.dismiss();
    },2500);

  }


  mostrarLoading(){
   // this.showLoading();
   this.otroMetodo();
  }

}
