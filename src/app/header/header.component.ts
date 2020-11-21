import { ElementRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Renderer2 } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    public images:any;
    public selectedCategory:string='home';
    constructor(private render:Renderer2,private elem: ElementRef) { }

    ngOnInit(): void {
        this.images = {
            "logo" : "https://product.massbunk.in/massbunk/Logo.png"
        }
    }
    changeTab(tabName:string)
    {
        console.log("testest",tabName);
        this.selectedCategory = tabName;
    }
}
