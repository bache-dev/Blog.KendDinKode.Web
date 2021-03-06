import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TopmenuComponent } from './features/topmenu/topmenu.component';
import { MainComponent } from './features/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    TopmenuComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
