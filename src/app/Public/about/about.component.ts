// about.component.ts
import { Component } from '@angular/core';
import { SplitterModule } from 'primeng/splitter';
import { MenuComponent } from '../menu/menu.component';
import { ButtonModule} from 'primeng/button';
import { MisionVisionComponent } from '../mision-vision/mision-vision.component';
import { MenuServicioComponent } from '../menu-servicio/menu-servicio.component';
import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  standalone: true,
  imports: [SplitterModule,MenuComponent,ButtonModule,MisionVisionComponent,MenuServicioComponent,FooterComponent]
})
export class AboutComponent { }
