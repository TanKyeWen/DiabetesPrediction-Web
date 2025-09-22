import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dropdown-info',
  imports: [CommonModule],
  templateUrl: './dropdown-info.html',
  styleUrls: ['./dropdown-info.css'],
})
export class DropdownInfo {
  showContent = false;

  toggleDropdown() {
    this.showContent = !this.showContent;
  }

  @Input() contentHeader: string = 'No Content'
  @Input() contentDetails: string = 'No Content'
}
