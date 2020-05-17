import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SshyComponent } from './sshy/sshy.component';
import { ParchmentComponent } from './parchment/parchment.component';

@NgModule({
  declarations: [
    AppComponent,
    SshyComponent,
    ParchmentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
