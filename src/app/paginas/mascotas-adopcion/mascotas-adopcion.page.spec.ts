import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MascotasAdopcionPage } from './mascotas-adopcion.page';

describe('MascotasAdopcionPage', () => {
  let component: MascotasAdopcionPage;
  let fixture: ComponentFixture<MascotasAdopcionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MascotasAdopcionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
