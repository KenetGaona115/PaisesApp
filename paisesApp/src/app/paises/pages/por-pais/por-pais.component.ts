import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/restCountriesResponse';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent implements OnInit {
  termino: string = ''
  isError: boolean = false;
  paises: Country[] = [];

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  buscar(event: string): void {
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
    
  }

}
