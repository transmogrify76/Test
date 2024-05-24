import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-diabetic',
  templateUrl: './diabetic.component.html',
  styleUrls: ['./diabetic.component.scss']
})
export class DiabeticComponent implements OnInit {
  form!: FormGroup;
  formData: any;


  constructor(private formBuilder: FormBuilder, private apiService: ApiService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      age: ['', Validators.required],
      pregnancies: ['', Validators.required],
      glucose: ['', Validators.required],
      blood_pressure: ['', Validators.required],
      skin_thickness: ['', Validators.required],
      insulin: ['', Validators.required],
      bmi: ['', Validators.required],
      diabetes_pedigree_function: ['', Validators.required]
    });

    this.form.valueChanges.subscribe(value => {
      this.formData = value;
    });
  }

  onSubmit() {
    if (this.form.valid) {

      this.apiService.diabetesData(this.formData.age, this.formData.pregnancies, this.formData.glucose, this.formData.blood_pressure,  this.formData.skin_thickness, this.formData.insulin,  this.formData.bmi, this.formData.diabetes_pedigree_function)
        .subscribe(
          response => {
            console.log('API call successful:', response);
        
          },
          error => {
            console.error('API call error:', error);

          }
        );
    }
  }
}
