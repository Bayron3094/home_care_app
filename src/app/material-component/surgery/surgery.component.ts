import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

import { Doctors } from "../../../assets/data/doctors";
import { Surgeries } from "../../../assets/data/surgeries";
import { Doctor } from '../../../assets/data/models/doctor';

@Component({
  selector: 'app-surgery',
  templateUrl: './surgery.component.html',
  styleUrls: ['./surgery.component.css']
})
export class SurgeryComponent implements OnInit {
  
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  filteredOptions: Observable<string[]>;

  listDoctor: Doctor[];

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.filteredOptions = this.firstFormGroup.controls.firstCtrl.valueChanges 
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return Surgeries.filter(option => option.toLowerCase().includes(filterValue));
  }

  selected(){
    console.log("Seleccion: ", this.firstFormGroup.value.firstCtrl); 
    let specialty = this.firstFormGroup.value.firstCtrl;
    this.listDoctor = [];
    for(var i in Doctors){
      if(Doctors[i].specialty == specialty){
        this.listDoctor.push(Doctors[i]);
      }
    }
    console.log(this.listDoctor)
  }

}
