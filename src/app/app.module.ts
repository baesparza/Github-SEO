import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Imported core module
import { CoreModule } from 'app/core/core.module';

// Imported bootsrap module
import { ShellComponent } from 'app/core/shell/shell.component';

@NgModule({
  declarations: [],
  imports: [
    CoreModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [ShellComponent]
})
export class AppModule { }
