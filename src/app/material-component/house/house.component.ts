import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

import { Doctors } from "../../../assets/data/doctors";
import { Specialties } from "../../../assets/data/specialties";
import { Doctor } from '../../../assets/data/models/doctor';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit {

  
  listDoctors: string[];
  specialtySelect: string;
  selection: string;
  serviceSel: string;
  service = "";
  numberService = false;
  isLinearvarient = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  filteredSpecialties: Observable<string[]>;
  filteredDoctors: Observable<Doctor[]>;

  regimeList: string[] = ['Contributivo', 'Subsidiado']; 
  serviceList: string[] = ['Remisión', 'Consulta particular']; 
  
  serviceControl = new FormControl('', [Validators.required]);
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrlName: ['', Validators.required],
      firstCtrlSurname: ['', Validators.required],
      firstCtrlNum: ['', Validators.required],
      firstCtrlBirth: ['', Validators.required],
      firstCtrlPhone: ['', Validators.required],
      firstCtrlNeigh: ['', Validators.required],
      firstCtrlAddress: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrlEspec: ['', Validators.required],
      secondCtrlDoctor: ['', Validators.required],
      secondCtrlDate: ['', Validators.required],
      secondCtrlTime: ['', Validators.required],
      secondCtrlEps: ['', Validators.required],
      secondCtrlRegime: ['', Validators.required],
      secondCtrlService: ['', Validators.required]
    });

    this.filteredDoctors = this.secondFormGroup.controls.secondCtrlDoctor.valueChanges //.firstCtrl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filterDoc(value))
      );
  }

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

  changeService(serviceSel){
    console.log("CAmbio")
    if(serviceSel == 'Remisión'){
      this.numberService = true;
    }else{
      this.numberService = false;
    }
  }

}
