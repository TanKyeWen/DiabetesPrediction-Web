import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DropdownInfo } from './dropdown-info/dropdown-info';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, DropdownInfo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('DiabetesPrediction-Web');
}
