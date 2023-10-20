import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mini-mapa',
  templateUrl: './mini-mapa.component.html',
  styleUrls: ['./mini-mapa.component.css']
})
export class MiniMapaComponent implements OnInit {
  mesaSeleccionada: string | null | undefined;
  folio: string | null | undefined;
  img: string | null | undefined;
  equipo: string | null | undefined;
  constructor( private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.img = this.route.snapshot.paramMap.get('imagen');
    this.folio = this.route.snapshot.paramMap.get('folio');
    this.equipo = this.route.snapshot.paramMap.get('equipo');
    this.route.params.subscribe(params => {
      this.folio = params['folio'];
    });
  }

  goBack() {
    history.back();
  }
}
