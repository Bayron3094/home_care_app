import { Component, OnInit } from '@angular/core';

import { Doctors } from "../../../assets/data/doctors";
import { Specialties } from "../../../assets/data/specialties";
import { Doctor } from '../../../assets/data/models/doctor';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  listDoctors: string[];
  specialtySelect: string;
  selection: string;
  isLinearvarient = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  filteredSpecialties: Observable<string[]>;
  filteredDoctors: Observable<Doctor[]>;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrlEspec: ['', Validators.required],
      secondCtrlDoctor: ['', Validators.required]
    });
    /* this.filteredSpecialties = this.secondFormGroup.controls.secondCtrlEspec.valueChanges //.firstCtrl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      ); */
    this.filteredDoctors = this.secondFormGroup.controls.secondCtrlDoctor.valueChanges //.firstCtrl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filterDoc(value))
      );
  }

  /* private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return Specialties.filter(option => option.toLowerCase().includes(filterValue));
  } */
  private _filterDoc(value: string): Doctor[] {
    const filterValue = value.toLowerCase();

    return Doctors.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  selectSpeci(selection){
    for(var i in Doctors){
      if(Doctors[i].name == selection){
        this.specialtySelect = Doctors[i].specialty;
      }
    }
    console.log(selection)
  }
}
