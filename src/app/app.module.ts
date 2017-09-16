import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { firebaseConfig} from "../environments/firebase.config";
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AngularFireDatabase } from 'angularfire2/database';
import {LessonsService} from "./shared/model/lessons.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
      AngularFireDatabaseModule,


  ],
  providers: [AngularFireDatabase,LessonsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
