import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public images:any;
  constructor() { }

  ngOnInit(): void {
    this.images = {
      "logo" : "https://product.massbunk.in/massbunk/Logo.png"
  }
  }

}
