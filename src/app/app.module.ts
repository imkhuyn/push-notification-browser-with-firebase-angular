import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { MessagingService } from './shared/messaging.service';
import { AsyncPipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireMessagingModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [
    MessagingService,
    AsyncPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
