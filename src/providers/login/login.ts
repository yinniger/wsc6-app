import {Injectable} from '@angular/core';
import * as firebase from 'firebase/app';
import {environment} from "../../environments/environment";

@Injectable()
export class LoginProvider {

  constructor() {
    firebase.initializeApp(environment.firebase);
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .catch(err => console.log(err));
  }

  doRegister(email, password) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(res => {
          resolve(res);
        }).catch(err => reject(err))
    })
  }

  doLogin(email, password) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(res => {
          resolve(res);
        }).catch(err => reject(err))
    })
  }

  passwordReset(email) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().sendPasswordResetEmail(email)
        .then(res => {
          resolve(res);
        }).catch(err => reject(err))
    })
  }

}
