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
        window.scrollTo(0, 0);
        this.content = [
            {img:"https://product.massbunk.in/massbunk/HomeBanner2.jpg","title":"Let’s Digitize Your Dreams"},
            {img:"https://product.massbunk.in/massbunk/HomeBanner2.jpg","title":"We Promote Your Business The Right Way"},
            {img:"https://product.massbunk.in/massbunk/HomeBanner2.jpg","title":"We Believe in adding Value."},
            {img:"https://product.massbunk.in/massbunk/HomeBanner2.jpg","title":"Innovative experiences for forward-thinking brands."}
        ];
        this.aboutSection = [
            {img:"https://product.massbunk.in/massbunk/HomeBanner3.jpg"},
            {img:"https://product.massbunk.in/massbunk/HomeBanner4.jpg"}
        ]
        this.workCase = [
            {img:"https://product.massbunk.in/massbunk/x1.jpg",category:"branding",companyName:"Xoolomall",url:"javascript:;"},
            {img:"https://product.massbunk.in/massbunk/worldmart.jpg",category:"branding",companyName:"WorldMart",url:"javascript:;"},
            {img:"https://product.massbunk.in/massbunk/Berbera.jpg",category:"branding",companyName:"Berbera",url:"http://berberafishing.company/"},
            {img:"https://product.massbunk.in/massbunk/Dialog1.jpg",category:"app-development",companyName:"Dialog",url:"https://www.dialog.lk/"},
            {img:"https://product.massbunk.in/massbunk/Dialog2.jpg",category:"app-development",companyName:"Dialog",url:"https://www.dialog.lk/"},
            {img:"https://product.massbunk.in/massbunk/SB1.jpg",category:"digital-marketing",companyName:"Sukkubhai",url:"http://sukkubhaibiryani.com/"},
            {img:"https://product.massbunk.in/massbunk/armaani.jpg",category:"digital-marketing",companyName:"Armaani Biryani",url:"javascript:;"},
            {img:"https://product.massbunk.in/massbunk/R1.jpg",category:"digital-marketing",companyName:"Raajali Sweets",url:"javascript:;"},
            {img:"https://product.massbunk.in/massbunk/FFC.jpg",category:"digital-marketing",companyName:"Friends Food Court",url:"javascript:;"},
            {img:"https://product.massbunk.in/massbunk/MoM.jpg",category:"digital-marketing",companyName:"Meet O Meat",url:"javascript:;"},
            {img:"https://product.massbunk.in/massbunk/Diner.jpg",category:"web-design",companyName:"Diner",url:"https://about.dinerqr.com/"}
        ]
    }

}
