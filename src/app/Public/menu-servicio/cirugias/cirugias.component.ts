import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-cirugias',
  templateUrl: './cirugias.component.html',
  styleUrl: './cirugias.component.css',
  standalone: true,
  imports: [CardModule, ButtonModule]
})
export class CirugiasComponent {

}
