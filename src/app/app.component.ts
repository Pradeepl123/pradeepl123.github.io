import { Component } from '@angular/core';
import {initializeApp,database} from 'firebase';
import { firebaseConfig} from "../environments/firebase.config";
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  courses$:FirebaseListObservable<any>;
  lessons$:FirebaseListObservable<any>;
  firstCourse:any;

constructor(af: AngularFireDatabase){

this.courses$   = af.list('courses');
this.courses$.subscribe(console.log);
this.lessons$ = af.list('lessons/-Ku0Etj0dand1IcxJ-uH')
this.lessons$.subscribe(console.log);
this.courses$.map(courses =>courses[3])
  .subscribe(
    course => this.firstCourse = course
  );



//initializeApp(firebaseConfig);
//var root = database().ref();
  //root.on('value',function(snap){
    //console.log(snap.val());
  //})
}

listPush(){
this.courses$.push({description:'hello'})
.then(
()=>console.log('push done'),
console.error
);
}
listRemove()
{
this.courses$.remove(this.firstCourse);
}
listUpdate()
{
this.courses$.update(this.firstCourse,{description:'praveenn'});

}
}
