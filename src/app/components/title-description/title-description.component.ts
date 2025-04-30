import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-description',
  templateUrl: './title-description.component.html',
  styleUrls: ['./title-description.component.scss', '../../app.component.scss']



})
export class TitleDescriptionComponent {
  @Input() Title:string="";
  @Input() Description:string="";
  @Input() EstilosDinamicosTitle:any="";
  @Input() EstilosDinamicosDescription:any="";
  @Input() Prueba: string='Todo lugar donde sale este texto es un componente';
  desabilitar=false;
  mensaje:string='No se ha agregado ninguna persona';

  agregarPersona(){
    this.mensaje='Persona agregada';
  }
}
