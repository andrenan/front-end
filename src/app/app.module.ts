import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {AccordionModule} from 'primeng/accordion';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';

import { AppComponent } from './app.component';
import { UploadFilesComponent } from './components/upload-files/upload-files.component';
import {ReactiveFormsModule} from '@angular/forms';
import { FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    UploadFilesComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AccordionModule,
        InputTextModule,
        ButtonModule,
        ReactiveFormsModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
