import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Diabetes } from '../models/diabetes.model';

@Injectable({
  providedIn: 'root'
})

export class PredictDiabetesServices{
    private baseURL = 'http://127.0.0.1:1249'
    private http = inject(HttpClient);

    getPrediction(diabetes: Diabetes): Observable<any>{
        return this.http.post<any>(`${this.baseURL}/api/predict`, diabetes);
    }
}