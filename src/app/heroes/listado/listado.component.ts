import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent  {

 heroes:string[]=['Ironman','Spiderman','Hulk','Captain America'];
 posicion:number=-1;
 heroeborrado?:string;
 

 
 
 borrarHeroe(index:number):void{
  
  if(this.posicion!=-1){
  this.heroeborrado=this.heroes[index];
  this.heroes.splice(index,1);
  this.posicion=-1
  }
  
 };

}
