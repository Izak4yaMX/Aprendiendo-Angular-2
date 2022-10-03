import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BodyModule } from './body/body.module';

@NgModule({
  imports: [BrowserModule, FormsModule, BodyModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
