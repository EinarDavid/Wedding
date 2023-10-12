import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Nuestra Historia';
  description = "No es la historia más bonita, ni la más perfecta. \n Aunque nos conocimos desde siempre, andábamos sin buscarnos pero sabiendo que nos encontraríamos y Dios lo hizo posible. Tuvimos la dicha de enamorarnos y acercarnos a Dios con un propósito. Después de tres años juntos y de vivir las experiencias más bonitas hemos decidido ser más felices y caminar juntos de la mano para siempre.";
  estilosDinamicos = {
    'color': 'red',
    
  };
}
