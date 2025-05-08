import { Routes } from '@angular/router';
import { WorkOrderInstructionsComponent } from './work-order-instructions/work-order-instructions.component';
import { CreateFromScratchComponent } from './create-from-scratch/create-from-scratch.component';
import { CreateFromVideoComponent } from './create-from-video/create-from-video.component';
import { CreateFromDocumentComponent } from './create-from-document/create-from-document.component';

export const routes: Routes = [
  { path: '', component: WorkOrderInstructionsComponent },
  { path: 'create-from-scratch', component: CreateFromScratchComponent },
  { path: 'create-from-video', component: CreateFromVideoComponent },
  { path: 'create-from-document', component: CreateFromDocumentComponent },
];
