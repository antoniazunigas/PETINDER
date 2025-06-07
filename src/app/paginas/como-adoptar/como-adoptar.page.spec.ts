import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComoAdoptarPage } from './como-adoptar.page';

describe('ComoAdoptarPage', () => {
  let component: ComoAdoptarPage;
  let fixture: ComponentFixture<ComoAdoptarPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ComoAdoptarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
