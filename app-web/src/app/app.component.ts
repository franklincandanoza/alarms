import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    $(document).ready(function(){
      $("#login").on('click', function(){

      })
    })
  }
  title = 'uxAlarmas';
}
