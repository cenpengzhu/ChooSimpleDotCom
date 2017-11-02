import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RainningDirective} from './app.rainning.directive'
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    RainningDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
