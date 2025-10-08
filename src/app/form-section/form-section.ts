import { Component, inject, OnInit, output } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DropdownInfo } from '../dropdown-info/dropdown-info';
import { CommonModule } from '@angular/common';
import { PredictDiabetesServices } from '../services/predict-diabetes.service';
import { Diabetes } from '../models/diabetes.model';

@Component({
  selector: 'app-form-section',
  imports: [ReactiveFormsModule, CommonModule, DropdownInfo],
  templateUrl: './form-section.html',
  styleUrl: './form-section.css',
  providers: [PredictDiabetesServices]
})

export class FormSection implements OnInit{
  predictedResult: string = '';
  hasDiabetes = output<string>();
  private predictDiabetes = inject(PredictDiabetesServices)   
  private fb = inject(FormBuilder)

  diabetesPredictionForm: FormGroup = this.fb.group({
    Pregnancy: ['', [Validators.required, Validators.min(0), Validators.max(25)]],
    Glucose: ['', [Validators.required, Validators.min(0.0000001), Validators.max(150)]],
    BloodPressure: ['', [Validators.required, Validators.min(0.0000001), Validators.max(150)]],
    SkinThickness: ['', [Validators.required, Validators.min(1), Validators.max(150)]],
    Insulin: ['', [Validators.required, Validators.min(0.0000001), Validators.max(150)]],
    Weight: ['', [Validators.required, Validators.min(1), Validators.max(450)]],
    Height: ['', [Validators.required, Validators.min(50), Validators.max(250)]],
    DiabetesPeedigreeFunction: ['', [Validators.required, Validators.min(0.078), Validators.max(2.42)]],
    Age: ['', [Validators.required, Validators.min(1), Validators.max(125)]],
  })

  ngOnInit(): void {
    
  }

  sendData(data: any){
    this.hasDiabetes.emit(data);
  }

  onSubmit(): void{
    const formData: Diabetes = this.diabetesPredictionForm.value;

    this.predictDiabetes.getPrediction(formData).subscribe({
      next: (response) => {
        console.log('Prediction Result: ', response);
        this.predictedResult = response.Result.toString();

        this.sendData(this.predictedResult);
      },
      error: (err) => {
        console.error('Error: ', err);
      }
    })
  }

  resetForm(): void{
    this.diabetesPredictionForm.reset();
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.diabetesPredictionForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }
}
