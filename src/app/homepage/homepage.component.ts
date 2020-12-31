import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

    constructor() { }
    public content : {"img":string,"title":string}[]
    public aboutSection : {"img":string}[]
    public workCase : {"img":String,"category":String,"companyName":String,"url":String}[]
    ngOnInit(): void {
        //If rounting happen document.ready function not trigger
        $.getScript('assets/js/custom-script.js');

        this.content = [
            {img:"https://product.massbunk.in/massbunk/HomeBanner1.jpg","title":"Let’s Digitize Your Dreams"},
            {img:"https://product.massbunk.in/massbunk/HomeBanner2.jpg","title":"We Promote Your Business The Right Way"}
        ];
        this.aboutSection = [
            {img:"https://product.massbunk.in/massbunk/HomeBanner3.jpg"},
            {img:"https://product.massbunk.in/massbunk/HomeBanner4.jpg"}
        ]
        this.workCase = [
            {img:"http://layerdrops.com/linoorhtml/images/gallery/1.jpg",category:"branding",companyName:"WorldMart",url:"http://virtual.massbunk.in/"},
            {img:"http://layerdrops.com/linoorhtml/images/gallery/2.jpg",category:"app-development",companyName:"Dialog",url:"https://www.dialog.lk/"},
            {img:"http://layerdrops.com/linoorhtml/images/gallery/3.jpg",category:"digital-marketing",companyName:"Sukkubhai",url:"http://sukkubhaibiryani.com/"},
            {img:"http://layerdrops.com/linoorhtml/images/gallery/4.jpg",category:"branding",companyName:"Berbera Fishing Compnay",url:"http://berberafishing.company/"}
        ]
    }

}
