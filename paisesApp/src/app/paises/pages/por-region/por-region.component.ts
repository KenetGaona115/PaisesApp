import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/restCountriesResponse';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
    button {
      margin-right: 10px;
      margin-top: 5px;
    }
    `
  ]
})
export class PorRegionComponent implements OnInit {

  regiones: string[] = ['eu',
    'efta',
    'caricom',
    'pa',
    'au',
    'usan',
    'eeu',
    'al',
    'asean',
    'cais',
    'cefta',
    'nafta ',
    'saarc ']

  regionActiva: string = ''
  paises: Country[] = [];

  // regiones: Map<string,string> = new Map<string,string>([
  //   ['EU','European Union'],
  //   ['EFTA','European Free Trade Association'],
  //   ['CARICOM','Caribbean Community'],
  //   ['PA','Pacific Alliance'],
  //   ['AU','African Union'],
  //   ['USAN','Union of South American Nations'],
  //   ['EEU','Eurasian Economic Union'],
  //   ['AL','(Arab League'],
  //   ['ASEAN','Association of Southeast Asian Nations'],
  //   ['CAIS','Central American Integration System'],
  //   ['CEFTA','Central European Free Trade Agreement'],
  //   ['NAFTA ','North American Free Trade Agreement'],
  //   ['SAARC ','South Asian Association for Regional Cooperation'],

  // ]
  // );

  constructor(
    private paisService: PaisService
  ) { }

  ngOnInit(): void {
  }

  activarRegion(region: string) {
    if (region===this.regionActiva) {
      return;
    }
    this.paises = [];
    this.regionActiva = region
    console.log(this.regionActiva)
    this.paisService.buscarRegion(region).subscribe({
      next: (paises) => {
        this.paises = paises;
      }
    })
    //TODO: llamar al service
  }

  getClaseCSS(item: string): string {
    return (item === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary'
  }

}
