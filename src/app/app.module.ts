import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Firebase imports
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import {AngularFireDatabase} from '@angular/fire/database';
import { StartComponent } from './components/start/start.component';
import {RouterModule} from '@angular/router';
import { ShowcaseComponent } from './components/showcase/showcase.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    ShowcaseComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule
  ],
  providers: [AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
