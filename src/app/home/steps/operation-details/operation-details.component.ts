import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operation-details',
  templateUrl: './operation-details.component.html',
  styleUrls: ['./operation-details.component.css']
})
export class OperationDetailsComponent implements OnInit {
  // DOM Functionalities
  equipmentNumber = [
    1
  ];
  maxEquipReached = false;

  // Local variables
  iEquip = 1;

  
  constructor() { }

  ngOnInit() {
    
  }


  addEquipment() { 
    if(this.iEquip < 5) {
      this.iEquip++;
      this.equipmentNumber.push(this.iEquip);
      console.log(this.iEquip)
    } else {
      this.maxEquipReached = true;
    }
  }

}
