import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SliderComponent } from './components/slider/slider.component';
import { MapComponent } from './components/map/map.component';
import { CommonModule } from '@angular/common';
import { LocalidadeComponent } from './components/localidade/localidade.component';
import { ProfissionaisComponent } from './components/profissionais/profissionais.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { MatIconModule } from '@angular/material/icon';
import { FaqDropdownComponent } from './components/faq-dropdown/faq-dropdown.component';
import { ModalDetalhesComponent } from './modal-detalhes/modal-detalhes.component';

import { LightboxModule } from 'ngx-lightbox';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ServicesComponent,
    SliderComponent,
    MapComponent,
    LocalidadeComponent,
    ProfissionaisComponent,
    GaleriaComponent,
    FaqDropdownComponent,
    ModalDetalhesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    MatIconModule,
    LightboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
