import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HraderComponent } from './hrader/hrader.component';
import { BodyComponent } from './body/body.component';
import { BodyaboutComponent } from './bodyabout/bodyabout.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HraderComponent,
    BodyComponent,
    BodyaboutComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
