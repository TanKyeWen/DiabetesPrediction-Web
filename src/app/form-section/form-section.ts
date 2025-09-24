import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DropdownInfo } from '../dropdown-info/dropdown-info';
import { CommonModule } from '@angular/common';

interface DiabetesField {
  Pregnancy: number;
  Glucose: number;
  BloodPressure: number;
  SkinThickness: number;
  Insulin: number;
  Weight: number;
  Height: number;
  DiabetesPeedigreeFunction: number;
  Age: number;
}

@Component({
  selector: 'app-form-section',
  imports: [ReactiveFormsModule, CommonModule, DropdownInfo],
  templateUrl: './form-section.html',
  styleUrl: './form-section.css'
})
export class FormSection implements OnInit{
  diabetesPredictionForm: FormGroup;

  constructor(private fb: FormBuilder){
    this.diabetesPredictionForm = this.fb.group({
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
  }

  ngOnInit(): void {
      
  }

  onSubmit(): void{
    console.log("Submit Form")
  }

  resetForm(): void{
    this.diabetesPredictionForm.reset();
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.diabetesPredictionForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }
}
