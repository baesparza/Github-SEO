import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

// routes
import { HOME_ROUTES } from 'app/home/home.routes';

@NgModule({
  imports: [
    CommonModule,
    HOME_ROUTES
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
