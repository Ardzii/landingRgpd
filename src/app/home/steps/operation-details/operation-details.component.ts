import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

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

  
  constructor(private snackBar: MatSnackBar) { }

  ngOnInit() {
    
  }


  addEquipment() { 
    if(this.iEquip < 5) {
      this.iEquip++;
      this.equipmentNumber.push(this.iEquip);
    } else {
      this.maxEquipReached = true;
      this.fullEquipAlert()
    }
  }

  deleteEquipment() {
    if(this.iEquip > 1) {
      if (this.maxEquipReached) {
        this.maxEquipReached = false;
      }
      this.iEquip--;
      this.equipmentNumber.pop();
    }
  }

  fullEquipAlert() {
    this.snackBar.open('Max Equipos: No puede añadir mas equipos', 'OK', {
      duration: 5000,
    });
  }

}
