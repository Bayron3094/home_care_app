import { Component, OnInit } from '@angular/core';

import { Doctors } from "../../../assets/data/doctors";
import { Specialties } from "../../../assets/data/specialties";
import { Doctor } from '../../../assets/data/models/doctor';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  isLinearvarient = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

}
