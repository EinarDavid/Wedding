import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', ]
})
export class AppComponent {
  title = 'Nuestra Historia';
  description = "No es la historia más bonita, ni la más perfecta. \n Aunque nos conocimos desde siempre, andábamos sin buscarnos pero sabiendo que nos encontraríamos y Dios lo hizo posible. Tuvimos la dicha de enamorarnos y acercarnos a Dios con un propósito. Después de tres años juntos y de vivir las experiencias más bonitas hemos decidido ser más felices y caminar juntos de la mano para siempre.";
  NombreVictor = 'Victor Hugo Adrian';
  descriptionVictor = 'Servicial, fascinado por la música, sociable y dadivoso.';
  URLFacebookVictor = 'https://www.facebook.com';
  URLInstagramVictor = 'https://www.facebook.com';

  NombreJhu = 'Judith Forco Condori';
  descriptionJhu = 'Creativa, apasionada por viajar, divertida y soñadora.';
  URLFacebookJhu = 'https://www.facebook.com';
  URLInstagramJhu = 'https://www.facebook.com';
  
  estilosDinamicosTitle = {
    'color': '#A41916',
    'text-align': 'center',
    
  };
  estilosDinamicosDescription={
    'color': '#000000',
    
  }

  estilosDinamicosVictor={
    'color': '#000000',
    'text-align': 'right',
    'font-size': '38px',
  }

  styleDescriptionVictor={
    'color': '#000000',
    'text-align': 'right',
  }

  estilosDinamicosJhu={
    'color': '#000000',
    'text-align': 'left',
    'font-size': '38px',
  }

  styleDescriptionJhu={
    'color': '#000000',
    'text-align': 'left',
  }

  styleDinamicsButtons={
    'justify-content': 'flex-end',
  }
  styleDinamicsButtonsJhu={
    'justify-content': 'flex-start',
  }

  
}
