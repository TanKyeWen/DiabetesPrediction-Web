import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DropdownInfo } from './dropdown-info/dropdown-info';
import { CardInfo } from './card-info/card-info';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, DropdownInfo, CardInfo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('DiabetesPrediction-Web');
}
