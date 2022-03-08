import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/restCountriesResponse';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
    li{
      cursor: pointer
    }
    `
  ]
})
export class PorPaisComponent implements OnInit {
  termino: string = ''
  isError: boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];
  showSugerencia: boolean = false

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  buscar(event: string): void {
    this.showSugerencia = false;
    this.isError = false;
    this.paisService.buscarPais(event).subscribe(
      {
        next: (paises) => {
          this.paises = paises;
        },
        error: (err) => {
          console.info(err)
          this.isError = true;
          this.paises = [];
        }
      })
  }

  filter(event: string): void {
    this.isError = false;
    this.termino = event;
    this.showSugerencia = true;
    this.paisService.buscarPais(event).subscribe({
      next: (paises) => this.paisesSugeridos = paises.splice(0,4),
      error: (err) => {
        this.paisesSugeridos = [];
      }
    })
  }

  searchTerm(): void {
    this.buscar(this.termino)
  }

}
