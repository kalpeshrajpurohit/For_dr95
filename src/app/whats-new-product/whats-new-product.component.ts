import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-whats-new-product',
  templateUrl: './whats-new-product.component.html',
  styleUrls: ['./whats-new-product.component.scss']
})
export class WhatsNewProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {

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
