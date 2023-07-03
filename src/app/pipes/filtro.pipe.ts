import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(arreglo:any[], texto:string='',columna:string='title'): any[] {


    if(texto===''){
      return arreglo;
    }

    if(!arreglo){
     return arreglo;
    }

    texto=texto.toLowerCase();

    return arreglo.filter(item => item[columna].toLowerCase().includes(texto)
    );

  }

}

//se genera ionic g module pipes {para generar un modulo},
//ionic g pipe pipes/filtro{generar el pipe dentro de la carpeta con el nombre filtro} , 
//en el pipe module anexar que importamos  exports: [
   // FiltroPipe
 // ]
 //en el componente importamos el pipe modules
 //funciona para filtrar sin tener que hacer una consulta expecifica