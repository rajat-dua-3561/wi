import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-work-instruction-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './work-instruction-details.component.html',
  styleUrls: ['./work-instruction-details.component.scss']
})
export class WorkInstructionDetailsComponent {
  // Properties for form data
  workInstructionTitle: string = '';
  description: string = '';
  
  constructor() {
    console.log('WorkInstructionDetailsComponent initialized');
  }
  
  // Method to handle back button click
  goBack() {
    history.back();
  }

  // Method to handle proceed button click
  proceed() {
    console.log('Proceeding to Smart Steps...');
  }
} 