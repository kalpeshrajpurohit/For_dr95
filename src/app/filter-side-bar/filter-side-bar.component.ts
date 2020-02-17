import { Component, OnInit } from '@angular/core';
import { Options , LabelType} from 'ng5-slider';
declare var $: any;

@Component({
  selector: 'app-filter-side-bar',
  templateUrl: './filter-side-bar.component.html',
  styleUrls: ['./filter-side-bar.component.scss']
})
export class FilterSideBarComponent implements OnInit {
  value_price: number = 0;
  options: Options = {
    floor: 1815,
    ceil: 28035,
    translate: (value: number, label: LabelType): string => {
      return '₹' + value.toLocaleString('en');
    }
  };
  showmoreColor = true;
  constructor() { }

  ngOnInit() {

   
    let innerTextlabel = $(".filter_checkbox label p");
    let append_in = $('.filter_select_lable');
      for(let singhletext of innerTextlabel){
        $(singhletext).click(function(){

           append_in.append('<span>' + this.innerHTML + '<label class="remove_Tag">X<label></span>');
           $('.remove_Tag').on('click',function(){
            alert('remove Tag')
           })
        
      })

      }

      

   

  }

  ForshowmoreTab(){
    this.showmoreColor = false;
  } 

  clearAllcheck(){
    let checkbox = $('.filter_checkbox').find('input[type=checkbox]');
    checkbox.prop("checked",false);
    this.value_price=0;
    
  }

}
