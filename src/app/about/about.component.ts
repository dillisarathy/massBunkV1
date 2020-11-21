import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public content : {"img":string}
  public aboutSection : {"img":string}[]
  public feedBack : {"img":String,"url":String,"name":String,"designation":String,"content":String}[]
  public clients : {"img":String,"url":String}[]
  constructor() { }

  ngOnInit(): void {

    //If rounting happen document.ready function not trigger
    $.getScript('assets/js/custom-script.js');

    this.content = {img:"http://layerdrops.com/linoorhtml/images/main-slider/1.jpg"};
    this.aboutSection = [
      {img:"http://layerdrops.com/linoorhtml/images/resource/featured-image-11.jpg"},
      {img:"http://layerdrops.com/linoorhtml/images/resource/featured-image-12.jpg"}
    ]
    this.feedBack = [
      {img:"http://layerdrops.com/linoorhtml/images/resource/author-1.jpg",
          url:"https://sukkubhaibiryani.com/",name:"Mr. Abdul Khader Ali",
          designation:"Managing Director",content:`There are many variations of passages of lorem ipsum available but the
          majority have suffered alteration in some form, by injected humour, or randomised
          words which don't look even slightly believable.`},
      {img:"http://layerdrops.com/linoorhtml/images/resource/author-2.jpg",
          url:"http://friendshotel.in/",name:"Mr. Sajan",
          designation:"Director",content:`There are many variations of passages of lorem ipsum available but the
          majority have suffered alteration in some form, by injected humour, or randomised
          words which don't look even slightly believable.`}
    ]
    this.clients = [
      {img:"http://layerdrops.com/linoorhtml/images/clients/2.png",url:"https://sukkubhaibiryani.com/"},
      {img:"http://layerdrops.com/linoorhtml/images/clients/2.png",url:"https://sukkubhaibiryani.com/"}
    ]
  }

}
