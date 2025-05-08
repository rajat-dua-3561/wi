import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkOrderInstructionsComponent } from './work-order-instructions/work-order-instructions.component';
import { WorkInstructionDetailsComponent } from './work-instruction-details/work-instruction-details.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkOrderInstructionsComponent,
    WorkInstructionDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } 