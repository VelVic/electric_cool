import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MipaginaPage } from './mipagina.page';

describe('MipaginaPage', () => {
  let component: MipaginaPage;
  let fixture: ComponentFixture<MipaginaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MipaginaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
