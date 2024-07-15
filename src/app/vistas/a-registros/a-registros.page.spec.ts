import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ARegistrosPage } from './a-registros.page';

describe('ARegistrosPage', () => {
  let component: ARegistrosPage;
  let fixture: ComponentFixture<ARegistrosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ARegistrosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
