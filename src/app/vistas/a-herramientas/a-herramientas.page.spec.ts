import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AHerramientasPage } from './a-herramientas.page';

describe('AHerramientasPage', () => {
  let component: AHerramientasPage;
  let fixture: ComponentFixture<AHerramientasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AHerramientasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
