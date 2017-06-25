import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

// routes
import { HOME_ROUTES } from 'app/home/home.routes';

// services
import { GithubService } from 'app/home/services/github.service';
import { CardComponent } from './card/card.component';

@NgModule({
  imports: [
    CommonModule,
    HOME_ROUTES
  ],
  providers: [
    GithubService
  ],
  declarations: [HomeComponent, CardComponent]
})
export class HomeModule { }
