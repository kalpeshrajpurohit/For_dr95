import { Component, OnInit } from '@angular/core';
import 'node_modules/bootstrap/dist/js/bootstrap.min.js';
import { $ } from 'protractor';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  header_logourl ="./assets/images/logo.png";
  serachActiveInput = true;
  IsactiveNavbarXS= false;
  Isoverside = false;

  constructor() { }

  ngOnInit() {

  }

  searchBtnclick(){
    this.serachActiveInput = false;
  }

  closeInputSearchHead(){
    this.serachActiveInput = true;
  }

  sidebarmenuXs(){
    this.IsactiveNavbarXS = true;
    this.Isoverside = true;
  }

  close_sidebarmobile(){
    this.IsactiveNavbarXS = false;
    this.Isoverside = false;
  }
  
  outside_close_sidebar(){
    this.IsactiveNavbarXS = false;
    this.Isoverside = false;
  }
  

  
}




