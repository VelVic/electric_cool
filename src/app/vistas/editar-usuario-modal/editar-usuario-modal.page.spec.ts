import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarUsuarioModalPage } from './editar-usuario-modal.page';

describe('EditarUsuarioModalPage', () => {
  let component: EditarUsuarioModalPage;
  let fixture: ComponentFixture<EditarUsuarioModalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditarUsuarioModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
