import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-entrance',
  templateUrl: './entrance.page.html',
  styleUrls: ['./entrance.page.scss'],
})
export class EntrancePage implements OnInit {

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

  swiperSlideChanged(e:any){
    console.log('changed:', e)
  }

}
interface Comp{
  icon:string;
  nombre:string;
  ruta:string;
  color:string;


}
