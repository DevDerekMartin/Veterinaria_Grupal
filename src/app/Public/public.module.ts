// public.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-routing.module';
import { RouterModule } from '@angular/router'; // Importa RouterModule

import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
// PRIME NG
import { StyleClassModule } from 'primeng/styleclass'; // Importa el módulo necesario
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
// NAVAR
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { MisionVisionComponent } from './mision-vision/mision-vision.component';
import { AboutComponent } from './about/about.component';
import { MenuServicioComponent } from './menu-servicio/menu-servicio.component';
import { CirugiasComponent } from './menu-servicio/cirugias/cirugias.component';
import { ConsultaComponent } from './menu-servicio/consulta/consulta.component';
import { OtrosServiciosComponent } from './menu-servicio/otros-servicios/otros-servicios.component';
import { ImagenologiaComponent } from './menu-servicio/imagenologia/imagenologia.component';
import { LaboratorioComponent } from './menu-servicio/laboratorio/laboratorio.component';
import { OdontologiaComponent } from './menu-servicio/odontologia/odontologia.component';
//ICONOS

@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent,
    ConsultaComponent,
    OtrosServiciosComponent,
    ImagenologiaComponent,
    LaboratorioComponent,
    OdontologiaComponent,
  ],
  imports: [
    FooterComponent,
    RouterModule,
    CirugiasComponent,
    MenuServicioComponent,
    AboutComponent,
    MenuComponent,
    CommonModule,
    PublicRoutingModule,
    StyleClassModule,
    ButtonModule,
    RippleModule,
    MisionVisionComponent
  ],
  exports:[
  ]
})
export class PublicModule { }
