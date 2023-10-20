import { Injectable } from '@angular/core';

interface MesaInfo {
  mesa: string;
  equipo: string;
  imagen: string;
  sonido: string;
}

@Injectable({
  providedIn: 'root'
})
export class MapaService {
  private mapaDeMesas: { [folio: string]: MesaInfo } = {
    'a1': { mesa: 'mesa1', equipo: 'Cafenio', imagen: 'A1', sonido: 'url_sonido_1' },
    'a2': { mesa: 'mesa2', equipo: 'Carnelio', imagen: 'A2', sonido: 'url_sonido_2' },
    'a3': { mesa: 'mesa3', equipo: 'Donas chucha', imagen: 'A3', sonido: 'url_sonido_2' },
    'a4': { mesa: 'mesa4', equipo: 'Estaban frias Hornos', imagen: 'A4', sonido: 'url_sonido_2' },
    'a5': { mesa: 'mesa5', equipo: 'Abichuelas magicas', imagen: 'A5', sonido: 'url_sonido_2' },
    'a6': { mesa: 'mesa5', equipo: 'Michecheladas', imagen: 'A6', sonido: 'url_sonido_2' },

    't3': { mesa: 'mesa5', equipo: 'Cafenio', imagen: 'T3', sonido: 'url_sonido_2' },
    's3': { mesa: 'mesa5', equipo: 'Cafenio', imagen: 'S3', sonido: 'url_sonido_2' },

    // Agrega más asignaciones folio-mesa según sea necesario
  };

  encontrarMesaPorLetra(letra: string): MesaInfo | null {
    const info = this.mapaDeMesas[letra];
    return info || null;
  }
 
}
