import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  public content : {"img":string}
  constructor() { }

  ngOnInit(): void {
    //If rounting happen document.ready function not trigger
    $.getScript('assets/js/custom-script.js');
    window.scrollTo(0, 0);
    this.content = {img:"https://product.massbunk.in/massbunk/services.jpg"};
  }

}
