import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WorkExperienceComponent } from './workexperience/work-experience.component';
import { HeaderComponent } from './header/header.component';
import { GeneralService } from './services/general.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SkillsComponent } from './skills/skills.component';
import { CertificatesComponent } from './certificates/certificates.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkExperienceComponent,
    HeaderComponent,
    SkillsComponent,
    CertificatesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GeneralService],
  bootstrap: [AppComponent]
})
export class AppModule { }