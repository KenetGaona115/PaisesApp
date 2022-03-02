import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/restCountriesResponse';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styles: [
  ]
})
export class PaisTablaComponent implements OnInit {

  @Input() paises: Country[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}