import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { SwitchComponent } from './switch/switch.component';

import {MatCheckboxModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    CheckboxComponent,
    SwitchComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
