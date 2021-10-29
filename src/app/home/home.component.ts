import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // btn=document.querySelector("button.mb-menu-btn");
  // menu=document.querySelector(".mb-menu");
  isShow:boolean=true;

  constructor() { }

  ngOnInit(): void {}

  showList(){
  this.isShow=!this.isShow;
  console.log(this.isShow);
  }
  
}
