import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

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
  selectedPlant: any = '';
  selectedUnit: any = '';
  selectedLocation: any = '';
  selectedAssetClass: any = '';
  selectedAsset: any = '';
  selectedCategory: any = '';
  tags: string = '';
  selectedLanguage: any = '';
  thumbnailUrl: string | null = null;
  
  // Sample data for dropdowns
  plants = [
    { id: 1, name: 'Plant 1' },
    { id: 2, name: 'Plant 2' },
    { id: 3, name: 'Plant 3' }
  ];
  
  units = [
    { id: 1, name: 'Unit 1' },
    { id: 2, name: 'Unit 2' },
    { id: 3, name: 'Unit 3' }
  ];
  
  locations = [
    { id: 1, name: 'Location 1' },
    { id: 2, name: 'Location 2' },
    { id: 3, name: 'Location 3' }
  ];
  
  assetClasses = [
    { id: 1, name: 'Asset Class 1' },
    { id: 2, name: 'Asset Class 2' },
    { id: 3, name: 'Asset Class 3' }
  ];
  
  assets = [
    { id: 1, name: 'Asset 1' },
    { id: 2, name: 'Asset 2' },
    { id: 3, name: 'Asset 3' }
  ];
  
  categories = [
    { id: 1, name: 'Operation' },
    { id: 2, name: 'Maintenance' },
    { id: 3, name: 'Repair' }
  ];
  
  languages = [
    { id: 1, name: 'English' },
    { id: 2, name: 'Spanish' },
    { id: 3, name: 'French' }
  ];
  
  constructor(private router: Router) {
    console.log('CreateFromScratchComponent initialized');
  }
  
  // Method to handle back button click
  goBack() {
    history.back();
  }

  // Method to handle proceed button click
  proceed() {
    console.log('Proceeding to Smart Steps...');
    // In a real app, you would save the data and navigate to the next step
    // this.router.navigate(['/smart-steps']);
  }
  
  // Method to handle thumbnail upload
  uploadThumbnail(event: any) {
    const file = event.target.files[0];
    if (file) {
      // Check file size (5MB limit)
      if (file.size > 5 * 1024 * 1024) {
        alert('File size exceeds 5MB limit');
        return;
      }
      
      // Check file type
      if (!['image/jpeg', 'image/png'].includes(file.type)) {
        alert('Only JPG and PNG files are allowed');
        return;
      }
      
      // Create a URL for the uploaded image
      this.thumbnailUrl = URL.createObjectURL(file);
    }
  }
  
  // Method to trigger file input click
  triggerFileInput() {
    document.getElementById('thumbnailUpload')?.click();
  }
} 