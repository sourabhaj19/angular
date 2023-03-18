import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserformComponent } from './shared-components/userform/userform.component';
import { AddressformComponent } from './shared-components/addressform/addressform.component';
import { EducationformComponent } from './shared-components/educationform/educationform.component';
import { SkillsformComponent } from './shared-components/skillsform/skillsform.component';
import { HomeComponent } from './home/home.component';
import {MatIcon} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    UserformComponent,
    AddressformComponent,
    EducationformComponent,
    SkillsformComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIcon,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
