import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-webdevelopment',
  templateUrl: './webdevelopment.component.html',
  styleUrls: ['./webdevelopment.component.css']
})
export class WebdevelopmentComponent implements OnInit {

  constructor() { }
  public content : {"img":string}

  ngOnInit(): void {
    //If rounting happen document.ready function not trigger
    $.getScript('assets/js/custom-script.js');

    this.content = {img:"http://layerdrops.com/linoorhtml/images/background/image-7.jpg"};
  }

}
