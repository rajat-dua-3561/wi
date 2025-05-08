import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-from-scratch',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-from-scratch.component.html',
  styleUrls: ['./create-from-scratch.component.scss']
})
export class CreateFromScratchComponent {
  // Properties for form data
  workInstructionTitle: string = '';
  description: string = '';
  
  constructor() {
    console.log('CreateFromScratchComponent initialized');
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