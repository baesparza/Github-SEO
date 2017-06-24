import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { ShellComponent } from './shell/shell.component';
import { MainComponent } from './main/main.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ShellComponent,
    MainComponent
  ],
  exports: [ShellComponent]
})
export class CoreModule { }
