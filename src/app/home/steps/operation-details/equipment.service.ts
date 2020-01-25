import { Injectable } from '@angular/core';
import { SECTORS } from '../../../mock-db';
import { FAMILIES } from '../../../mock-db';


@Injectable({
  providedIn: 'root'
})
export class EquipmentService {
  private sectors = SECTORS;
  private families = FAMILIES;
  constructor() { }

  getSectors() { 
    return this.sectors;
  }

  getFamily(sector) {
    return this.families[sector];
  }
}
