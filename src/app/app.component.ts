import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WorkOrderInstructionsComponent } from './work-order-instructions/work-order-instructions.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WorkOrderInstructionsComponent],
  template: '<app-work-order-instructions></app-work-order-instructions>',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'wi';
}
