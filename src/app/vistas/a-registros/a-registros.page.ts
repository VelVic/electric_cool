import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Registros } from 'src/app/Models/Registros';
import { AuthService } from 'src/app/servicios/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-a-registros',
  templateUrl: './a-registros.page.html',
  styleUrls: ['./a-registros.page.scss'],
})
export class ARegistrosPage implements OnInit {

  registros:Registros={
    cliente:'',
    electrodomestico:'',
    estatus:'',
    descripcion:''
  };

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
  
  r_registros(form:NgForm){

    if (form.invalid) {
      return;
    }

    Swal.fire({
      allowOutsideClick:false,
      icon:'info',
      text:'Espere por favor...',
      heightAuto:false
    });
    Swal.showLoading();
    this.servicio.r_registro({ registros: this.registros })
      .subscribe(resp=>{
        console.log(resp);
        Swal.close();

        this.ruta.navigateByUrl('/index');
      },err=>{
        console.log(err.error.error.menssage);
          Swal.fire({
            icon:'error',
            title:'Error al guardar',
            text: err.error.error.menssage,
            heightAuto:false
          });
      })
  }

}
