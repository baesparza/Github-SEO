import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { ShellComponent } from './shell/shell.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ShellComponent
  ],
  exports: [ShellComponent]
})
export class CoreModule { }
