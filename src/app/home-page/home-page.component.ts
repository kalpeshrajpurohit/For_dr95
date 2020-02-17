import { Component, OnInit } from '@angular/core';
declare var $: any;



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $('.owl-carousel_1top').owlCarousel({
      loop: true,
      margin: 10,
      autoHeight: false,
      smartSpeed: 1000,
      autoplayTimeout:3000,
      nav: false,
      dots: true,
      navText: [
        "<i class='fa fa-caret-left'></i>",
        "<i class='fa fa-caret-right'></i>"
      ],
      autoplay: true,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 1
        }
      }
    })


    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      smartSpeed: 1000,
      autoplayTimeout:3000,
      nav: false,
      navText: [
        "<i class='fa fa-caret-left'></i>",
        "<i class='fa fa-caret-right'></i>"
      ],
      autoplay: true,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 5
        }
      }
    })
   
    
  }


}

