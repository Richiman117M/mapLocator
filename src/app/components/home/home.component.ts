// home.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MapaService } from 'src/app/services/mapa.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  folio: string = '';
  constructor(private router: Router, private mapaService: MapaService) {}
  //Boton jalando 
  buscarMesa() {
    //[(ngModel)]="folio" representa lo que estaba en la caja
    if (this.folio.trim() !== '') {
     
      const mesaInfo = this.mapaService.encontrarMesaPorLetra( this.folio.toLowerCase());
      if (mesaInfo) {
        // Navegar a la ruta mini-mapa con el folio proporcionado
        this.router.navigate(['/mini-mapa', this.folio, { equipo: mesaInfo.equipo, imagen: mesaInfo.imagen, sonido: mesaInfo.sonido }]);
      }
    }
  }
}
