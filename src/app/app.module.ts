import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WorkExperienceComponent } from './workexperience/work-experience.component';
import { HeaderComponent } from './header/header.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkExperienceComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
