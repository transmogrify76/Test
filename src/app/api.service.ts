import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://127.0.0.1:5000/'; // Replace with your API endpoint

  constructor(private http: HttpClient) { }



  diabetesData(age: number, pregnancies: number, glucose: number, bloodPressure: number, skinThickness: number, insulin: number, bmi: number, diabetesPedigreeFunction: number): Observable<any> {
    const url = `${this.apiUrl}/diabetes/?age=${age}&pregnancies=${pregnancies}&glucose=${glucose}&blood_pressure=${bloodPressure}&skin_thickness=${skinThickness}&insulin=${insulin}&bmi=${bmi}&diabetes_pedigree_function=${diabetesPedigreeFunction}`;
    return this.http.post<any>(url, {});
  }

  kidneyData(age: number, bloodPressure: number, specificGravity: number, albumin: number, sugar: number, redBloodCells: string, pusCell: string, pusCellClumps: string, bacteria: string, bloodGlucoseRandom: number, bloodUrea: number, serumCreatinine: number, sodium: number, potassium: number, haemoglobin: number, packedCellVolume: number, whiteBloodCellCount: number, redBloodCellCount: number, hypertension: string, diabetesMellitus: string, coronaryArteryDisease: string, appetite: string, pedaEdema: string, aanemia: string){
    const url = `${this.apiUrl}/kidney/?` +
    `age=${age}&` +
    `blood_pressure=${bloodPressure}&` +
    `specific_gravity=${specificGravity}&` +
    `albumin=${albumin}&` +
    `sugar=${sugar}&` +
    `red_blood_cells=${redBloodCells}&` +
    `pus_cell=${pusCell}&` +
    `pus_cell_clumps=${pusCellClumps}&` +
    `bacteria=${bacteria}&` +
    `blood_glucose_random=${bloodGlucoseRandom}&` +
    `blood_urea=${bloodUrea}&` +
    `serum_creatinine=${serumCreatinine}&` +
    `sodium=${sodium}&` +
    `potassium=${potassium}&` +
    `haemoglobin=${haemoglobin}&` +
    `packed_cell_volume=${packedCellVolume}&` +
    `white_blood_cell_count=${whiteBloodCellCount}&` +
    `red_blood_cell_count=${redBloodCellCount}&` +
    `hypertension=${hypertension}&` +
    `diabetes_mellitus=${diabetesMellitus}&` +
    `coronary_artery_disease=${coronaryArteryDisease}&` +
    `appetite=${appetite}&` +
    `peda_edema=${pedaEdema}&` +
    `aanemia=${aanemia}`;
    return this.http.post<any>(url, {});
  }
}

