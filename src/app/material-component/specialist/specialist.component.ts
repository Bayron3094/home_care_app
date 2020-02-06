import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

import { Doctors } from "../../../assets/data/doctors";
import { Specialties } from "../../../assets/data/specialties";
import { Doctor } from '../../../assets/data/models/doctor';

@Component({
  selector: 'app-specialist',
  templateUrl: './specialist.component.html',
  styleUrls: ['./specialist.component.css']
})
export class SpecialistComponent implements OnInit {

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
    this.filteredOptions = this.firstFormGroup.controls.firstCtrl.valueChanges //.firstCtrl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return Specialties.filter(option => option.toLowerCase().includes(filterValue));
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
