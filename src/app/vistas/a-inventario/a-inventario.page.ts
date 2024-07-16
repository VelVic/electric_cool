import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-a-inventario',
  templateUrl: './a-inventario.page.html',
  styleUrls: ['./a-inventario.page.scss'],
})
export class AInventarioPage implements OnInit {
  inventario = [
    {
      nombre: 'Laptop Lenovo ThinkPad X1 Carbon',
      descripcion: 'Portátil ultraligero para profesionales.',
      stock: 15,
      precio: 1599.99,
      imagen: 'assets/images/laptop-lenovo.jpg'
    },
    {
      nombre: 'Teléfono Inteligente Samsung Galaxy S20',
      descripcion: 'Potente smartphone con cámara de alta resolución.',
      stock: 20,
      precio: 899.99,
      imagen: 'assets/images/samsung-s20.jpg'
    },
    {
      nombre: 'Monitor Curvo LG UltraWide 34"',
      descripcion: 'Pantalla amplia y curva para una experiencia inmersiva.',
      stock: 10,
      precio: 599.99,
      imagen: 'assets/images/lg-monitor.jpg'
    }
    // Agrega aquí los demás elementos del inventario según sea necesario
  ];

  constructor(
    private router: Router,
    private authService: AuthService,
    public menu: MenuController
  ) { }

  ngOnInit() {
  }

  llamarMenu() {
    this.menu.open('menu');
  }

  cerrarMenu() {
    this.menu.close('menu');
  }

  salir() {
    this.authService.logout();
    this.router.navigateByUrl('/entrance');
  }
}
