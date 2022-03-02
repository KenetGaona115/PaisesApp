import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/restCountriesResponse';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent implements OnInit {

  termino: string = ''
  paises: Country[] = [];
  isError: boolean = false;

  constructor(private paisService: PaisService,) { }

  ngOnInit(): void {
  }

  buscar(event: string): void {
    this.isError = false;
    this.paisService.buscarCapital(event).subscribe({
      next: (paises) => {
        this.paises = paises
      },
      error: (error) => {
        console.info(error)
        this.isError = true
        this.paises = []
      }

    })

  }

  filter(event: string): void {
    console.info(event)
  }

}
