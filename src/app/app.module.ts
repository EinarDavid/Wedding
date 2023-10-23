import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleDescriptionComponent } from './components/title-description/title-description.component';
import { ButtonsRRSSComponent } from './components/buttons-rrss/buttons-rrss.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleDescriptionComponent,
    ButtonsRRSSComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
