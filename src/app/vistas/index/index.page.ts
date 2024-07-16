import { getAuth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {

  menuType: string = 'displayName';

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
