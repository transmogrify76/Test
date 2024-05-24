import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-parkinsons',
  templateUrl: './parkinsons.component.html',
  styleUrls: ['./parkinsons.component.scss']
})
export class ParkinsonsComponent {
     
  form!: FormGroup;
    formData: any;
  
    constructor(private formBuilder: FormBuilder, private apiService: ApiService) { }
  
    ngOnInit(): void {
      this.form = this.formBuilder.group({
        mdvp_fo_hz: ['', Validators.required],
        mdvp_fhi_hz: ['', Validators.required],
        mdvp_flo_hz: ['', Validators.required],
        mdvp_jitter_in_percent: ['', Validators.required],
        mdvp_jitter_abs: ['', Validators.required],
        mdvp_rap: ['', Validators.required],
        mdvp_ppq: ['', Validators.required],
        jitter_ddp: ['', Validators.required],
        mdvp_shimmer: ['', Validators.required],
        mdvp_shimmer_db: ['', Validators.required],
        shimmer_apq3: ['', Validators.required],
        shimmer_apq5: ['', Validators.required],
        mdvp_apq: ['', Validators.required],
        shimmer_dda: ['', Validators.required],
        nhr: ['', Validators.required],
        hnr: ['', Validators.required],
        rpde: ['', Validators.required],
        dfa: ['', Validators.required],
        spread1: ['', Validators.required],
        spread2: ['', Validators.required],
        d2: ['', Validators.required],
        ppe: ['', Validators.required]
    });
    
  
      this.form.valueChanges.subscribe(value => {
        this.formData = value;
      });
      
    }
  
    onSubmit() {
      if (this.form.valid) {
        const formData = this.form.value;
    
        this.apiService.parkinsons(
          formData.mdvp_fo_hz,
          formData.mdvp_fhi_hz,
          formData.mdvp_flo_hz,
          formData.mdvp_jitter_in_percent,
          formData.mdvp_jitter_abs,
          formData.mdvp_rap,
          formData.mdvp_ppq,
          formData.jitter_ddp,
          formData.mdvp_shimmer,
          formData.mdvp_shimmer_db,
          formData.shimmer_apq3,
          formData.shimmer_apq5,
          formData.mdvp_apq,
          formData.shimmer_dda,
          formData.nhr,
          formData.hnr,
          formData.rpde,
          formData.dfa,
          formData.spread1,
          formData.spread2,
          formData.d2,
          formData.ppe

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
