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

  constructor(
    private ruta:Router,
    private servicio:AuthService,
    public menu:MenuController
  ) { }

  ngOnInit() {
  }

  llamarMenu(){
    this.menu.open('menu');
  }

  cerrarMenu(){
    this.menu.close('menu');
  }

  salir(){
    this.servicio.logout();
    this.ruta.navigateByUrl('/entrance');
  }

}
interface Comp{
  icon:string;
  nombre:string;
  ruta:string;
  color:string;


}
