import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { initializeApp } from 'firebase/app';
import { addDoc, collection, getFirestore, onSnapshot } from 'firebase/firestore';

@Component({
  selector: 'app-chat',
  imports: [FormsModule, CommonModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {
  public mensajes: Array<any> = [];
  public usuario: string = "";
  texto: string = "";
  
  private app;  
  private db;  

  constructor() {
    this.app = initializeApp(firebaseConfig);
    this.db = getFirestore(this.app);

    let col = collection(this.db, "Mensajes");

    let unsubscribe = onSnapshot(col, (qsn) => {
      this.mensajes = [];
      qsn.forEach((doc) => {
        this.mensajes.push(doc.data());

      });
    });
  }

  agregar() {
    let data = addDoc(collection(this.db,"Mensajes"),{
      persona:this.usuario,texto:this.texto});

  }

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