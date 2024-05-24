import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://127.0.0.1:5000/'; 

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

      parkinsons(mdvpFoHz: number, mdvpFhiHz: number, mdvpFloHz: number, mdvpJitterInPercent: number, mdvpJitterAbs: number, mdvpRap: number, mdvpPpq: number, jitterDdp: number, mdvpShimmer: number, mdvpShimmerDb: number, shimmerApq3: number, shimmerApq5: number, mdvpApq: number, shimmerDda: number, nhr: number, hnr: number, rpde: number, dfa: number, spread1: number, spread2: number, d2: number, ppe: number) {
        const url = `${this.apiUrl}/parkinsons/?` +
        `mdvp_fo_hz=${mdvpFoHz}&` +
        `mdvp_fhi_hz=${mdvpFhiHz}&` +
        `mdvp_flo_hz=${mdvpFloHz}&` +
        `mdvp_jitter_in_percent=${mdvpJitterInPercent}&` +
        `mdvp_jitter_abs=${mdvpJitterAbs}&` +
        `mdvp_rap=${mdvpRap}&` +
        `mdvp_ppq=${mdvpPpq}&` +
        `jitter_ddp=${jitterDdp}&` +
        `mdvp_shimmer=${mdvpShimmer}&` +
        `mdvp_shimmer_db=${mdvpShimmerDb}&` +
        `shimmer_apq3=${shimmerApq3}&` +
        `shimmer_apq5=${shimmerApq5}&` +
        `mdvp_apq=${mdvpApq}&` +
        `shimmer_dda=${shimmerDda}&` +
        `nhr=${nhr}&` +
        `hnr=${hnr}&` +
        `rpde=${rpde}&` +
        `dfa=${dfa}&` +
        `spread1=${spread1}&` +
        `spread2=${spread2}&` +
        `d2=${d2}&` +
        `ppe=${ppe}`;
        return this.http.post<any>(url, {});
    }


    liver(age: number, total_bilirubin: number, direct_bilirubin: number, alkaline_phosphotase: number, alamine_aminotransferase: number, aspartate_aminotransferase: number, total_protiens: number, albumin: number, albumin_and_globulin_ratio: number, gender: string) {
      const url = `${this.apiUrl}/liver/?` +
      `age=${age}&` +
      `total_bilirubin=${total_bilirubin}&` +
      `direct_bilirubin=${direct_bilirubin}&` +
      `alkaline_phosphotase=${alkaline_phosphotase}&` +
      `alamine_aminotransferase=${alamine_aminotransferase}&` +
      `aspartate_aminotransferase=${aspartate_aminotransferase}&` +
      `total_protiens=${total_protiens}&` +
      `albumin=${albumin}&` +
      `albumin_and_globulin_ratio=${albumin_and_globulin_ratio}&` +
      `gender=${gender}`;
      return this.http.post<any>(url, {});
    }

    braintumor(formData: FormData) {
      return this.http.post<any>('http://127.0.0.1:5000/braintumor/', formData);
    }

    pneumonia(formData: FormData) {
      return this.http.post<any>('http://127.0.0.1:5000/pneumonia/', formData);
    }

    alzheimers(formData: FormData) {
      return this.http.post<any>('http://127.0.0.1:5000/alzheimers/', formData);
    }

    tuberculosis(formData: FormData) {
      return this.http.post<any>('http://127.0.0.1:5000/tuberculosis/', formData);
    }

}

