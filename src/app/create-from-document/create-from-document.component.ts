import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-from-document',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-from-document.component.html',
  styleUrls: ['./create-from-document.component.scss']
})
export class CreateFromDocumentComponent {
  constructor(private router: Router) {
    console.log('CreateFromDocumentComponent initialized');
  }
  
  goBack() {
    history.back();
  }
  
  proceed() {
    // Navigate to the next step
    // this.router.navigate(['/next-page']);
    console.log('Proceeding to next step');
  }
} 