import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router : Router){

  }

  navigate(){
    this.router.navigate(["alarmas"])
  }
  ngOnInit(): void {
    $(document).ready(function(){
      $("#login").on('click', function(){

      })
    })
  }
  title = 'uxAlarmas';
}
