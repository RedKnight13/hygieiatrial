import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { RespComponent } from './resp/resp.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    RespComponent,
    NavComponent,
    AboutComponent,
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
