import { AuthService } from './../../servicios/auth.service';
import { NgForm } from '@angular/forms';
import { Usuario } from '../../Models/Usuario';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { MenuController, ModalController } from '@ionic/angular';
import { UserService } from 'src/app/servicios/user.service';
import { EditarUsuarioModalPage } from '../editar-usuario-modal/editar-usuario-modal.page';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  usuarios: Usuario[] = [];
  usuario: Usuario = {
    displayName: '',
    apellidos: '',
    email: '',
    password: '',
    tipo: '',
    uid: ''
  };
  recordar = false;

  constructor(
    private servicio: AuthService,
    private ruta: Router,
    public menu: MenuController,
    private userService: UserService,
    private modalController: ModalController,
  ) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe({
      next: (usuarios) => {
        this.usuarios = usuarios;
        console.log('Usuarios cargados:', this.usuarios);
      },
      error: (err) => {
        console.error('Error fetching usuarios:', err);
      }
    });
  }

  async editarUsuario(usuario: Usuario) {
    const modal = await this.modalController.create({
      component: EditarUsuarioModalPage,
      componentProps: { usuario }
    });
    modal.onDidDismiss().then((data) => {
      if (data.data && data.data.actualizado) {
        this.loadUsers(); // Actualizar lista después de editar
      }
    });
    return await modal.present();
  }

  eliminarUsuario(uid: string) {
    this.userService.deleteUser(uid).subscribe({
      next: () => {
        console.log('Usuario eliminado correctamente');
        // Actualizar la lista de usuarios después de eliminar uno
        this.loadUsers();
      },
      error: (err) => {
        console.error('Error al eliminar usuario:', err);
      }
    });
  }

  confirmarEliminacion(uid: string) {
    if (confirm('¿Estás seguro de que deseas eliminar este usuario?')) {
      this.userService.deleteUser(uid).subscribe({
        next: () => {
          console.log('Usuario eliminado correctamente');
          this.loadUsers(); // Vuelve a cargar la lista de usuarios después de eliminar uno
        },
        error: (err) => {
          console.error('Error al eliminar usuario:', err);
        }
      });
    }
  }
  /* async confirmarEliminacion(uid: string) {
    const confirmacion = await Swal.fire({
      title: 'Confirmar eliminación',
      text: '¿Estás seguro de que deseas eliminar este usuario?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    });
  
    if (confirmacion.isConfirmed) {
      try {
        await this.userService.deleteUser(uid).toPromise();
        Swal.fire('Eliminado!', 'El usuario ha sido eliminado correctamente.', 'success');
        this.loadUsers(); // Actualizar lista después de eliminar
      } catch (error) {
        console.error('Error al eliminar usuario:', error);
        Swal.fire('Error', 'Ocurrió un error al eliminar el usuario.', 'error');
      }
    }
  } */

  llamarMenu() {
    this.menu.open('menu');
  }

  cerrarMenu() {
    this.menu.close('menu');
  }

  salir() {
    this.servicio.logout();
    this.ruta.navigateByUrl('/login');
  }

  registrar(form: NgForm) {
    if (form.invalid) {
      return;
    }

    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Espere por favor...',
      heightAuto: false
    });
    Swal.showLoading();
    this.servicio.registrar(this.usuario).subscribe(
      resp => {
        console.log(resp);
        Swal.close();

        if (this.recordar) {
          localStorage.setItem('email_r', this.usuario.email);
        }

        this.ruta.navigateByUrl('/register');
      },
      err => {
        console.log(err.error.error.menssage);
        Swal.fire({
          icon: 'error',
          title: 'Error al registrar',
          text: err.error.error.menssage,
          heightAuto: false
        });
      }
    );
  }
}
