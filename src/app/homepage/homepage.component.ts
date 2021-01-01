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
        //If routing happen document.ready function not trigger
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
            {img:"https://product.massbunk.in/massbunk/Branding1.jpg",category:"branding",companyName:"WorldMart",url:"javascript:;"},
            {img:"https://product.massbunk.in/massbunk/Branding2.jpg",category:"branding",companyName:"Berbera",url:"http://berberafishing.company/"},
            {img:"https://product.massbunk.in/massbunk/Application1.jpg",category:"app-development",companyName:"Dialog",url:"https://www.dialog.lk/"},
            {img:"https://product.massbunk.in/massbunk/Application2.jpg",category:"app-development",companyName:"Dialog",url:"https://www.dialog.lk/"},
            {img:"https://product.massbunk.in/massbunk/Social.jpg",category:"digital-marketing",companyName:"Sukkubhai",url:"http://sukkubhaibiryani.com/"},
            {img:"https://product.massbunk.in/massbunk/webdesign1.jpg",category:"web-design",companyName:"Diner",url:"https://about.dinerqr.com/"}
        ]
    }

}
