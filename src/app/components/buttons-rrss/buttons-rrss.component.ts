import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-buttons-rrss',
  templateUrl: './buttons-rrss.component.html',
  styleUrls: ['./buttons-rrss.component.scss']
})
export class ButtonsRRSSComponent {
  @Input() URLFacebook:string="";
  @Input() URLInstagram:string="";
  @Input() StyleDinamicsButtons:any="";
}
