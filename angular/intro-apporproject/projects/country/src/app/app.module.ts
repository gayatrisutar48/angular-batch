import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuelistComponent } from './menuelist/menuelist.component';
import { InfobodyComponent } from './infobody/infobody.component';
import { FooterComponent } from './footer/footer.component';
import { BodyCompComponent } from './body-comp/body-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuelistComponent,
    InfobodyComponent,
    FooterComponent,
    BodyCompComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
