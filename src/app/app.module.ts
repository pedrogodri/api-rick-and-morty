import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DetailsComponent } from './components/details/details.component';
import { ListCharacterComponent } from './components/lists/list-character/list-character.component';
import { HttpClientModule } from '@angular/common/http';
import { ListLocationComponent } from './components/lists/list-location/list-location.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    DetailsComponent,
    ListCharacterComponent,
    ListLocationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
