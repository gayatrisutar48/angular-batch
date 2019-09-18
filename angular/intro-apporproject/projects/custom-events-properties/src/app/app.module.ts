import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyCardComponent } from './my-card/my-card.component';
import { CompComComponent } from './comp-com/comp-com.component';
import { PrgComponent } from './comp-com/prg.component';
import { BtnsComponent } from './comp-com/btns.component';

@NgModule({
  declarations: [
    AppComponent,
    MyCardComponent,
    CompComComponent,
    PrgComponent,
    BtnsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
