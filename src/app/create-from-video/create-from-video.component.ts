import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-from-video',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-from-video.component.html',
  styleUrls: ['./create-from-video.component.scss']
})
export class CreateFromVideoComponent {
  constructor() {
    console.log('CreateFromVideoComponent initialized');
  }
  
  goBack() {
    history.back();
  }
} 