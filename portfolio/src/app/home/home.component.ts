import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations:[
    trigger('myAnim',[
      transition(':enter',[
        style({opacity:0}),
        animate('0.8s',style({opacity:1}))
      ])
    ]),
    trigger('myAnim2',[
      transition(':enter',[
        style({opacity:0}),
        animate('0.3s',style({opacity:1}))
      ])
    ])
  ]
})
export class HomeComponent {
  isExpandMoreVisible=false;
  isIconClicked=false;
  // Expand More button 
  expandMore(){
    this.isExpandMoreVisible=!this.isExpandMoreVisible;
    this.isIconClicked=!this.isIconClicked;
  }

}
