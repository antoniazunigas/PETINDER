import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HistoriasFelicesPage } from './historias-felices.page';

describe('HistoriasFelicesPage', () => {
  let component: HistoriasFelicesPage;
  let fixture: ComponentFixture<HistoriasFelicesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriasFelicesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
