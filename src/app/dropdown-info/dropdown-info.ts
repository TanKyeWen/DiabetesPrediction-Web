import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdown-info',
  imports: [NgIf],
  templateUrl: './dropdown-info.html',
  styleUrls: ['./dropdown-info.css'],
  standalone: true
})
export class DropdownInfo {
  isOpen = false;
}
