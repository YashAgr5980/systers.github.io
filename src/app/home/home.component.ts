import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public slides: Array<Object> = [
    {'image': '../assets/img/stock1.jpg', 'desc': ''},
    {'image': '../assets/img/stock2.jpg', 'desc': ''},
    {'image': '../assets/img/stock1.jpg', 'desc': ''},
    {'image': '../assets/img/stock2.jpg', 'desc': ''}
];
  constructor() { }

  ngOnInit() {
  }

}

