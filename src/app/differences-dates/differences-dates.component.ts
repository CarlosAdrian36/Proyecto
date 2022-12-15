import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';

moment.locale('es')


interface Comparacion {
  fecha1: string
  fecha2: string
  diff:string
}

@Component({
  selector: 'app-differences-dates',
  templateUrl: './differences-dates.component.html',
  styleUrls: ['./differences-dates.component.css']
})
export class DifferencesDatesComponent  {

  Comparativas : Comparacion[] = [

  ]


  nuevaComparativa : Comparacion = {
    fecha1: '',
    fecha2: '',
    diff: ''
  }
calcular(){
  const fechaInicial = this.nuevaComparativa.fecha1
  const fechaI = moment(fechaInicial)

  const fechaFinal = this.nuevaComparativa.fecha2;
  const fechaF = moment(fechaFinal)

  let resDf = fechaF.from(fechaI)
  
  console.log( resDf)

  this.nuevaComparativa.diff = resDf;

  this.Comparativas.push(this.nuevaComparativa)
  this.nuevaComparativa ={
    fecha1: '',
    fecha2: '',
    diff: ''
  }
}

  cambiar(event: any){
    console.log( event.target.value)
  }
}
