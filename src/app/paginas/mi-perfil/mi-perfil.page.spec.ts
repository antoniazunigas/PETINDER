import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MiPerfilPage } from './mi-perfil.page';

describe('EditarPerfilPage', () => {
  let component: MiPerfilPage;
  let fixture: ComponentFixture<MiPerfilPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MiPerfilPage]
    }).compileComponents();

    fixture = TestBed.createComponent(MiPerfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

