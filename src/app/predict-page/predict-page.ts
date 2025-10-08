import { Component } from '@angular/core';
import { FormSection } from '../form-section/form-section';
import { CommonModule } from '@angular/common';
import { DropdownInfo } from '../dropdown-info/dropdown-info';

@Component({
  selector: 'app-predict-page',
  imports: [FormSection, CommonModule, DropdownInfo],
  templateUrl: './predict-page.html',
  styleUrl: './predict-page.css'
})
export class PredictPage {
  hasDiabetes: boolean | undefined;

  handleScroll(){
    setTimeout(() => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }, 453);
  }

  handleChildData(message: string | undefined) {
    if (message == '1'){
      this.hasDiabetes = true
    }else{
      this.hasDiabetes = false;
    }

    if (message) {
      console.log('hasDiabetes changed:', message);

      this.handleScroll()
    }
  }
}
