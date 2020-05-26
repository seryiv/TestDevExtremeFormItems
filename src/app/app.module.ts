import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DxFormModule, DxTemplateHost, WatcherHelper, NestedOptionHost, DxTextAreaModule } from 'devextreme-angular';
import { CustomFormComponent } from './custom-form/custom-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxFormModule,
    DxTextAreaModule
  ],
  providers: [DxTemplateHost, WatcherHelper, NestedOptionHost],
  bootstrap: [AppComponent]
})
export class AppModule { }
