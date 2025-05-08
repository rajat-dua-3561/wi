import { Routes } from '@angular/router';
import { WorkOrderInstructionsComponent } from './work-order-instructions/work-order-instructions.component';
import { WorkInstructionDetailsComponent } from './work-instruction-details/work-instruction-details.component';
import { CreateFromVideoComponent } from './create-from-video/create-from-video.component';
import { CreateFromDocumentComponent } from './create-from-document/create-from-document.component';

export const routes: Routes = [
  { path: '', component: WorkOrderInstructionsComponent },
  { path: 'work-instruction-details', component: WorkInstructionDetailsComponent },
  { path: 'create-from-video', component: CreateFromVideoComponent },
  { path: 'create-from-document', component: CreateFromDocumentComponent },
];
