import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private aFAuth: AngularFireAuth) { }

  login() {
    this.aFAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

}
