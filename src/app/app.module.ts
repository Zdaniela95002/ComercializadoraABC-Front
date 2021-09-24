import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonaComponent } from './components/persona/persona.component';
import { LoguinComponent } from './components/loguin/loguin.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    LoguinComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
