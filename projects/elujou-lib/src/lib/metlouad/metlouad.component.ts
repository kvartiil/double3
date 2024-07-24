import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

//import { products } from '../products';

@Component({
  selector: 'metlouad-component',
  templateUrl: './metlouad.component.html',
  styleUrls: ['./metlouad.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class MetlouadComponent {

ReadMore:boolean = true
visible:boolean = false

onclick()
  {
    this.ReadMore = !this.ReadMore; //not equal to condition
    this.visible = !this.visible
    //alert("lgaj");
  }
  
}