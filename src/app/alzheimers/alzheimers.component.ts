import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-alzheimers',
  templateUrl: './alzheimers.component.html',
  styleUrls: ['./alzheimers.component.scss']
})
export class AlzheimersComponent {
  selectedFile: File | null = null;
  imageUrl: string | null = null;

  constructor(private http: HttpClient, private apiService:ApiService) {}

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.selectedFile = file;
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageUrl = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
  onUpload(){
    if (!this.selectedFile) {
      console.error('No file selected');
      return;
    }

    const formData = new FormData();
    formData.append('img', this.selectedFile, this.selectedFile.name);

    this.apiService.alzheimers(formData)
      .subscribe(
        (response) => {
          // Assuming the API returns the result of brain tumor detection
          console.log('API Response:', response);
        },
        error => {
          console.error('Upload failed:', error);
        }
      );
  }
}
