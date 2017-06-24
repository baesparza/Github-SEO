import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// routes
import { CORE_ROUTES } from './core.routes';

// components
import { ShellComponent } from './shell/shell.component';
import { MainComponent } from './main/main.component';
import { ContainerComponent } from './container/container.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CORE_ROUTES
  ],
  declarations: [
    ShellComponent,
    MainComponent,
    ContainerComponent
  ],
  exports: [ShellComponent]
})
export class CoreModule { }
