import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkOrderInstructionsComponent } from './work-order-instructions/work-order-instructions.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkOrderInstructionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
})
export class AppModule { } 