import { Component } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, getRedirectResult } from "firebase/auth";

const provider = new GoogleAuthProvider();
@Component({
  selector: 'app-gmailauth',
  imports: [],
  templateUrl: './gmailauth.component.html',
  styleUrl: './gmailauth.component.css'
})
export class GmailauthComponent {

  private app;
  private auth;
  constructor() {

    this.app = initializeApp(firebaseConfig);
    this.auth = getAuth(this.app);


    
  }
  entrar() {

    signInWithPopup(this.auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        console.log(token);
        // The signed-in user info.
        const user = result.user;
        console.info(user);
        localStorage.setItem('usuario','{email:'+ user.email + ',nombre:'+ user.displayName 
          + ',id:'+ user.uid+ '}' );
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        localStorage.setItem('usuario','');
      });
  }

  verUsuario(){}
   
}


const firebaseConfig = {
  apiKey: "AIzaSyDK_n7c75wZANDreY2gW4sRiQj8xSZlnz4",
  authDomain: "comercio-2ca41.firebaseapp.com",
  projectId: "comercio-2ca41",
  storageBucket: "comercio-2ca41.firebasestorage.app",
  messagingSenderId: "104066751373",
  appId: "1:104066751373:web:d00b397d9159a42a8cbbc4",
  measurementId: "G-K04JNBH0KC"
};