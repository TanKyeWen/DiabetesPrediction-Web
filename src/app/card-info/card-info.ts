import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-info',
  imports: [CommonModule],
  templateUrl: './card-info.html',
  styleUrl: './card-info.css'
})
export class CardInfo {
  @Input() cardList: any[] = [];
}
