import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Usuario } from '../../Models/Usuario';
import { UserService } from 'src/app/servicios/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-usuario-modal',
  templateUrl: './editar-usuario-modal.page.html',
  styleUrls: ['./editar-usuario-modal.page.scss'],
})
export class EditarUsuarioModalPage {
  @Input() usuario!: Usuario;

  constructor(
    private modalController: ModalController,
    private userService: UserService,
  ) { }

  cerrarModal() {
    this.modalController.dismiss();
  }

  guardarCambios() {
    this.userService.updateUser(this.usuario).subscribe(
      () => {
        console.log('Usuario actualizado correctamente');
        // Aquí podrías agregar lógica adicional después de la actualización
      },
      (error) => {
        console.error('Error al actualizar usuario:', error);
      }
    );
    
  }
}

