import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkOrderInstructionsComponent } from './work-order-instructions/work-order-instructions.component';
import { WorkInstructionDetailsComponent } from './work-instruction-details/work-instruction-details.component';

const routes: Routes = [
  { path: '', component: WorkOrderInstructionsComponent },
  { path: 'work-instruction-details', component: WorkInstructionDetailsComponent },
  // Other routes...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 