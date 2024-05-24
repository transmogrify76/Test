import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-liver',
  templateUrl: './liver.component.html',
  styleUrls: ['./liver.component.scss']
})
export class LiverComponent {
  form!: FormGroup;
  formData: any;

  constructor(private formBuilder: FormBuilder, private apiService: ApiService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      age: ['', Validators.required],
      total_bilirubin: ['', Validators.required],
      direct_bilirubin: ['', Validators.required],
      alkaline_phosphotase: ['', Validators.required],
      alamine_aminotransferase: ['', Validators.required],
      aspartate_aminotransferase: ['', Validators.required],
      total_protiens: ['', Validators.required],
      albumin: ['', Validators.required],
      albumin_and_globulin_ratio: ['', Validators.required],
      gender: ['', Validators.required]
  });
  
  

    this.form.valueChanges.subscribe(value => {
      this.formData = value;
    });
    
  }

  onSubmit() {
    if (this.form.valid) {
      const formData = this.form.value;
  
      this.apiService.liver(
        formData.age,
        formData.total_bilirubin,
        formData.direct_bilirubin,
        formData.alkaline_phosphotase,
        formData.alamine_aminotransferase,
        formData.aspartate_aminotransferase,
        formData.total_protiens,
        formData.albumin,
        formData.albumin_and_globulin_ratio,
        formData.gender


      ).subscribe(
        (response) => {
          console.log('API call successful:', response);
          // Handle response as needed
        },
        (error) => {
          console.error('API call error:', error);
          // Handle error as needed
        }
      );
    }
  }
}
