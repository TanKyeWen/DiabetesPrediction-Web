import { Component } from '@angular/core';
import { FormSection } from '../form-section/form-section';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-predict-page',
  imports: [FormSection, CommonModule],
  templateUrl: './predict-page.html',
  styleUrl: './predict-page.css'
})
export class PredictPage {
  hasDiabetes: string | undefined;

  handleChildData(message: string){
    this.hasDiabetes = message
    console.log('Received from child: ', message)
  }
}
