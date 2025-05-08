import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-from-video',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-from-video.component.html',
  styleUrls: ['./create-from-video.component.scss']
})
export class CreateFromVideoComponent {
  constructor(private router: Router) {
    console.log('CreateFromVideoComponent initialized');
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