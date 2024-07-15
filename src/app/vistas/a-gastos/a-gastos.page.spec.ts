import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AGastosPage } from './a-gastos.page';

describe('AGastosPage', () => {
  let component: AGastosPage;
  let fixture: ComponentFixture<AGastosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AGastosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
