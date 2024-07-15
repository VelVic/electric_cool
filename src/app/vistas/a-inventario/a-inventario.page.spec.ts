import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AInventarioPage } from './a-inventario.page';

describe('AInventarioPage', () => {
  let component: AInventarioPage;
  let fixture: ComponentFixture<AInventarioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AInventarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
