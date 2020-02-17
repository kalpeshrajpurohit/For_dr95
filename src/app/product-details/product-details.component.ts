import { Component, OnInit } from '@angular/core';
// import  'src/assets/custome-js/cloudzoom.js';

declare var $:any;

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let find_thumFirstImg = $('.productItem_list').find('li:first');
    let replacethumfromFirstImg = $(find_thumFirstImg).find('img').attr('src')
    $('#change_imgsrc').attr('src',replacethumfromFirstImg)
    let thum_side_images = $('.productItem_list li img');
      for(let thum_side_image of thum_side_images){
          $(thum_side_image).click(function(){
            $('#change_imgsrc').attr('src',this.src)
          })
      }
    }

}
