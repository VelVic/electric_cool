import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AuthService } from './servicios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  comp : Comp [] = [
    {
      icon: 'home-outline',
      nombre: 'Inicio',
      ruta: '/index',
      color:'dark'
    },
    {
      icon: 'clipboard-outline',
      nombre: 'Registros',
      ruta: '/a-registros',
      color:'dark'
    },
    {
      icon: 'albums-outline',
      nombre: 'Inventario',
      ruta: '/a-inventario',
      color:'dark'
    },
    /* {
      icon: 'hammer-outline',
      nombre: 'Herramientas',
      ruta: '/a-herramientas',
      color:'dark'
    },
    {
      icon: 'cash-outline',
      nombre: 'Gastos',
      ruta: '/a-gastos',
      color:'dark'
    }, */
    {
      icon: 'person-add-outline',
      nombre: 'Crear Cuenta',
      ruta: '/register',
      color:'dark'
    }
  ];

  constructor(
    public menu: MenuController,
    public servicio: AuthService,
    public ruta: Router
  ) {}

  llamarMenu(){
    this.menu.open('menu');
  }
  cerrarMenu(){
    this.menu.close('menu');
  }
  cerrarsesion(){
    this.servicio.logout();
    this.ruta.navigateByUrl('/login');
    this.menu.close('menu');
  }
}

interface Comp{
  icon:string;
  nombre:string;
  ruta:string;
  color:string;
}
