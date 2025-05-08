import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-from-document',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-from-document.component.html',
  styleUrls: ['./create-from-document.component.scss']
})
export class CreateFromDocumentComponent {
  constructor() {
    console.log('CreateFromDocumentComponent initialized');
  }
  
  goBack() {
    history.back();
  }
} 