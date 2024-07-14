import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MenuComponent } from './menu/menu.component';
import { MisionVisionComponent } from './mision-vision/mision-vision.component';
import { CirugiasComponent } from './menu-servicio/cirugias/cirugias.component';
import { MenuServicioComponent } from './menu-servicio/menu-servicio.component';
import { ConsultaComponent } from './menu-servicio/consulta/consulta.component';
import { OtrosServiciosComponent } from './menu-servicio/otros-servicios/otros-servicios.component';
import { ImagenologiaComponent } from './menu-servicio/imagenologia/imagenologia.component';
import { LaboratorioComponent } from './menu-servicio/laboratorio/laboratorio.component';
import { OdontologiaComponent } from './menu-servicio/odontologia/odontologia.component';
const routes: Routes = [
  {
    path:'Home', component:HomeComponent
  },
  {
    path:'About', component:AboutComponent,
    children: [ 
      {
        path: 'Cirugia', component: CirugiasComponent
      },
      {
        path:'Consulta', component: ConsultaComponent
      },
      {
        path:'Otros', component:OtrosServiciosComponent
      },
      {
        path:'Imaginologia', component:ImagenologiaComponent
      },
      {
        path:'Laboratorio', component:LaboratorioComponent
      },
      {
        path:'Odontologia',component:OdontologiaComponent
      }
    ]
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
