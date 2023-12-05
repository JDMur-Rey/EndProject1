import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientCreationComponent } from './client-creation/client-creation.component';
import { MeetingCreationComponent } from './meeting-creation/meeting-creation.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientCreationComponent,
    MeetingCreationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
