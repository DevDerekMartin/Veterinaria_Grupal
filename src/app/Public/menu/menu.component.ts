import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { RippleModule } from 'primeng/ripple';
import { Router } from '@angular/router'; // Importa Router

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  standalone: true,
  imports: [MenubarModule, BadgeModule, AvatarModule, InputTextModule, RippleModule, CommonModule]
})
export class MenuComponent implements OnInit {
  items: MenuItem[] | undefined;
  sessionItems: MenuItem[] | undefined;
  constructor(private router:Router){}

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: '/Home'
      },
      {
        label: 'Nosotros',
        icon: 'pi pi-star',
        routerLink: '/About'

      },
      {
        label: 'Tienda',
        icon: 'pi pi-search',
        items: [
          {
            label: 'Medicamentos',
            icon: 'pi pi-bolt',
            shortcut: '⌘+S',
            routerLink: '/About'
          },
          {
            label: 'Accesorios',
            icon: 'pi pi-server',
            shortcut: '⌘+B',
            routerLink: '/About'

          },
          {
            label: 'Juguetes',
            icon: 'pi pi-pencil',
            shortcut: '⌘+U',
            routerLink: 'About'
          },
          {
            separator: true
          },
        ]
      },
      {
        label: 'Contact',
        icon: 'pi pi-envelope',
        badge: '3',
        routerLink: '/About'

      }
    ];

    this.sessionItems = [
      {
        label: 'Sesion',
        icon:'pi pi-unlock',
        items:[
          {
            label: 'Administrador',
            icon: 'pi pi-unlock',
            shortcut: '⌘+S',
            routerLink: '/About'

          },
          {
            separator: true
          },
          {
            label: 'Usuario',
            icon: 'pi pi-user',
            shortcut: '⌘+B',
            routerLink: '/About'
          }
        ]

      }
     
    ];
  }
}
