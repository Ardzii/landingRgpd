import { Component, OnInit, Input } from '@angular/core';
import { EquipmentService } from '../equipment.service';


@Component({
  selector: 'app-new-equipment',
  templateUrl: './new-equipment.component.html',
  styleUrls: ['./new-equipment.component.css']
})
export class NewEquipmentComponent implements OnInit {
  // DOM Functionalities
  selectedSector: string;
  selectedFamily: string;
  @Input() equipNumber;

  // Local variables
  sectors;
  families;

  constructor(private equipmentService: EquipmentService) { }

  ngOnInit() {
    this.sectors = this.equipmentService.getSectors();
  }

  selectSector(sector) { 
    this.selectedSector = sector;
    this.selectedFamily = null;
    this.families = this.equipmentService.getFamily(this.selectedSector);
  }

  selectFamily(family) {
    this.selectedFamily = family;
  }

}
