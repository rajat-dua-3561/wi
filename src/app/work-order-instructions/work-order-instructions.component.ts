import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-work-order-instructions',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './work-order-instructions.component.html',
  styleUrls: ['./work-order-instructions.component.scss']
})
export class WorkOrderInstructionsComponent {
  filters = {
    plant: '3100-Houston',
    unit: 'All',
    location: 'All',
    asset: 'Asset 1',
    category: 'All'
  };

  tabs = ['Home', 'Feedback'];
  selectedTab = 'Home';

  timeFilters = ['Today', 'Yesterday', '7D', '30D', '3M', '6M', 'Custom'];
  
  selectedStatus = 'Archive';
  selectedTime = 'Custom';
  viewMode = 'grid';

  workOrders = [
    {
      title: 'Pemex Salina Cruz Refinery',
      type: 'Operation',
      author: 'Gustavo Siphron',
      date: '25/04/2025',
      time: '12:30 pm',
      version: '5.0',
      image: 'image1.jpg',
      favorite: false
    },
    {
      title: 'Irving Oil Refinery',
      type: 'Health and safety',
      author: 'Gustavo Siphron',
      date: '25/04/2025',
      time: '12:30 pm',
      version: '5.0',
      image: 'image2.jpg',
      favorite: true
    },
    {
      title: 'The Thriving Marathon Galveston Bay R...',
      type: 'Maintenance',
      author: 'Gustavo Siphron',
      date: '25/04/2025',
      time: '12:30 pm',
      version: '5.0',
      image: 'image3.jpg',
      favorite: false
    },
    {
      title: 'Pemex Salina Cruz Refinery',
      type: 'Operation',
      author: 'Gustavo Siphron',
      date: '25/04/2023',
      time: '12:30 pm',
      version: '5.0',
      image: 'image4.jpg'
    },
    {
      title: 'Pemex Salina Cruz Refinery',
      type: 'Operation',
      author: 'Gustavo Siphron',
      date: '25/04/2023',
      time: '12:30 pm',
      version: '5.0',
      image: 'image5.jpg'
    },
    {
      title: 'Pemex Salina Cruz Refinery',
      type: 'Operation',
      author: 'Gustavo Siphron',
      date: '25/04/2023',
      time: '12:30 pm',
      version: '5.0',
      image: 'image6.jpg'
    },
    {
      title: 'Pemex Salina Cruz Refinery',
      type: 'Operation',
      author: 'Gustavo Siphron',
      date: '25/04/2023',
      time: '12:30 pm',
      version: '5.0',
      image: 'image7.jpg'
    },
    {
      title: 'Newly Added Work Order',
      type: 'Maintenance',
      author: 'Jane Doe',
      date: '30/07/2024',
      time: '09:00 am',
      version: '1.0',
      image: 'image3.jpg',
      favorite: false
    },

    // Add more work orders as needed
  ];

  plants = [
    { name: 'Automobile Assembly Plant' },
    { name: 'Food Processing Plant' },
    { name: 'Chemical Plant' },
    { name: 'Pharmaceutical Plant' },
    { name: 'Steel Plant' },
    { name: 'Electronics Manufacturing Plant' },
    { name: 'Packaging Plant' }
  ];
  selectedPlant = this.plants[0];
  plantDropdownOpen = false;

  // New properties for Location dropdown
  locations = [
    { name: 'Safety & Compliance Unit' },
    { name: 'Logistics/Dispatch Unit' },
    { name: 'Packaging Unit' },
    { name: 'Warehouse/Storage Unit' },
    { name: 'Quality Control (QC) Unit' },
    { name: 'Maintenance Unit' },
    { name: 'Production Unit' }
  ];
  selectedLocation = this.locations[0] // Or initialize with a default if needed
  locationDropdownOpen = false;

  // Properties for Asset dropdown
  assets = [
    { name: 'Detroit, Michigan' },
    { name: 'Houston, Texas' },
    { name: 'Pittsburgh, Pennsylvania' },
    { name: 'Charlotte, North Carolina' },
    { name: 'Louisville, Kentucky' },
    { name: 'Greenville, South Carolina' },
    { name: 'Phoenix, Arizona' }
  ];
  selectedAsset= this.assets[0]; // Initialize to 'Asset 1'
  assetDropdownOpen = false;

  // New properties for Category dropdown
  categories = [
    { name: 'All' }, // Added 'All'
    { name: 'Training & Onboarding' },
    { name: 'Skill development guides' },
    { name: 'Maintenance' },
    { name: 'Inspection & Quality Control' },
    { name: 'Disassembly / Tear-down' },
    { name: 'Logistics & Handling' },
    { name: 'Cleaning & Shutdown' }
  ];
  selectedCategory= this.categories[0]; // Initialize to 'All'
  categoryDropdownOpen = false;

  // New properties for Unit dropdown
  units = [
    { name: 'All' },
    { name: 'Unit 1' },
    { name: 'Unit 2' },
    { name: 'Unit 3' }
  ];
  selectedUnit = this.units[0]; // Default to 'All'
  unitDropdownOpen = false;

  constructor(private router: Router) {}

  togglePlantDropdown() {
    this.plantDropdownOpen = !this.plantDropdownOpen;
  }

  closePlantDropdown() {
    // Timeout ensures click event on dropdown item registers before closing
    setTimeout(() => {
      this.plantDropdownOpen = false;
    }, 150);
  }

  selectPlant(plant: any) {
    this.selectedPlant = plant;
    this.plantDropdownOpen = false;
  }

  // Methods for Location dropdown
  toggleLocationDropdown() {
    this.locationDropdownOpen = !this.locationDropdownOpen;
  }

  closeLocationDropdown() {
    setTimeout(() => {
      this.locationDropdownOpen = false;
    }, 150);
  }

  selectLocation(location: any) {
    this.selectedLocation = location;
    this.locationDropdownOpen = false;
  }

  // Methods for Asset dropdown
  toggleAssetDropdown() {
    this.assetDropdownOpen = !this.assetDropdownOpen;
  }

  closeAssetDropdown() {
    // Timeout ensures click event on dropdown item registers before closing
    setTimeout(() => {
      this.assetDropdownOpen = false;
    }, 150);
  }

  selectAsset(asset: any) {
    this.selectedAsset = asset;
    this.assetDropdownOpen = false;
  }

  // Methods for Category dropdown
  toggleCategoryDropdown() {
    this.categoryDropdownOpen = !this.categoryDropdownOpen;
  }

  closeCategoryDropdown() {
    setTimeout(() => {
      this.categoryDropdownOpen = false;
    }, 150);
  }

  selectCategory(category: any) {
    this.selectedCategory = category;
    this.categoryDropdownOpen = false;
  }

  // New methods for Unit dropdown
  toggleUnitDropdown() {
    this.unitDropdownOpen = !this.unitDropdownOpen;
  }

  closeUnitDropdown() {
    setTimeout(() => {
      this.unitDropdownOpen = false;
    }, 150);
  }

  selectUnit(unit: any) {
    this.selectedUnit = unit;
    console.log('Selected unit:', this.selectedUnit);
    this.unitDropdownOpen = false;
  }
  
  navigateToCreateFromVideo() {
    console.log('Navigating to create from video');
    this.router.navigate(['/create-from-video']);
  }

  navigateToCreateFromDocument() {
    console.log('Navigating to create from document');
    this.router.navigate(['/create-from-document']);
  }

  navigateToCreateFromScratch() {
    console.log('Navigating to create from scratch');
    this.router.navigate(['/work-instruction-details']);
  }
} 