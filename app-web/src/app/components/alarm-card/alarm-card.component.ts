import { Component, OnInit } from '@angular/core';
import { ThemePalette} from '@angular/material/core';
import listaAlarmas from '../../../assets/json/alarmas.json';


@Component({
  selector: 'app-alarm-card',
  templateUrl: './alarm-card.component.html',
  styleUrls: ['./alarm-card.component.scss']
})
export class AlarmCardComponent implements OnInit {
  color: ThemePalette = 'accent';
  nombre: String =  "Desayuno temprano";
  tipo : String= "Salud";
  hora : String=  "05:00 p.m";
  checked = false;
  disabled = false;
  longText = "hola mundo"

  documentos: any = listaAlarmas

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function(){
      $("#state").on('click', function(){

      })
    })
  }

}
