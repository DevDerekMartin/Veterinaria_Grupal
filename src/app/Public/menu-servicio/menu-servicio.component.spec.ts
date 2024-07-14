import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuServicioComponent } from './menu-servicio.component';

describe('MenuServicioComponent', () => {
  let component: MenuServicioComponent;
  let fixture: ComponentFixture<MenuServicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuServicioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
