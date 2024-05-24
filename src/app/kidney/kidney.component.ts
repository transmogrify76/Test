import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-kidney',
  templateUrl: './kidney.component.html',
  styleUrls: ['./kidney.component.scss']
})
export class KidneyComponent implements OnInit {
  


    form!: FormGroup;
    formData: any;
  
    constructor(private formBuilder: FormBuilder, private apiService: ApiService) { }
  
    ngOnInit(): void {
      this.form = this.formBuilder.group({
        age: ['', Validators.required],
        blood_pressure: ['', Validators.required],
        specific_gravity: ['', Validators.required],
        albumin: ['', Validators.required],
        sugar: ['', Validators.required],
        red_blood_cells: ['', Validators.required],
        pus_cell: ['', Validators.required],
        pus_cell_clumps: ['', Validators.required],
        bacteria: ['', Validators.required],
        blood_glucose_random: ['', Validators.required],
        blood_urea: ['', Validators.required],
        serum_creatinine: ['', Validators.required],
        sodium: ['', Validators.required],
        potassium: ['', Validators.required],
        haemoglobin: ['', Validators.required],
        packed_cell_volume: ['', Validators.required],
        white_blood_cell_count: ['', Validators.required],
        red_blood_cell_count: ['', Validators.required],
        hypertension: ['', Validators.required],
        diabetes_mellitus: ['', Validators.required],
        coronary_artery_disease: ['', Validators.required],
        appetite: ['', Validators.required],
        peda_edema: ['', Validators.required],
        aanemia: ['', Validators.required]
      });
  
      this.form.valueChanges.subscribe(value => {
        this.formData = value;
      });
      
    }
  
    onSubmit() {
      if (this.form.valid) {
        const formData = this.form.value;
    
        this.apiService.kidneyData(
          formData.age,
          formData.blood_pressure,
          formData.specific_gravity,
          formData.albumin,
          formData.sugar,
          formData.red_blood_cells,
          formData.pus_cell,
          formData.pus_cell_clumps,
          formData.bacteria,
          formData.blood_glucose_random,
          formData.blood_urea,
          formData.serum_creatinine,
          formData.sodium,
          formData.potassium,
          formData.haemoglobin,
          formData.packed_cell_volume,
          formData.white_blood_cell_count,
          formData.red_blood_cell_count,
          formData.hypertension,
          formData.diabetes_mellitus,
          formData.coronary_artery_disease,
          formData.appetite,
          formData.peda_edema,
          formData.aanemia
        ).subscribe(
          response => {
            console.log('API call successful:', response);
            // Handle response as needed
          },
          error => {
            console.error('API call error:', error);
            // Handle error as needed
          }
        );
      }
    }
    
}
  

