import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DropboxComponent } from './dropbox/dropbox.component';
import { HooksComponent } from './hooks/hooks.component';
import { DemoDropboxFinalComponent } from './demo-dropbox-final/demo-dropbox-final.component';
import { KinveyFilesComponent } from './kinvey-files/kinvey-files.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DropboxComponent,
    HooksComponent,
    DemoDropboxFinalComponent,
    KinveyFilesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
