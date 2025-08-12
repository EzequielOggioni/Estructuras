import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, addDoc, getDocs, onSnapshot, query, where } from "firebase/firestore";

@Component({
  selector: 'app-data-firestorage',
  imports: [CommonModule],
  templateUrl: './data-firestorage.component.html',
  styleUrl: './data-firestorage.component.css'
})
export class DataFirestorageComponent {
  public datos: Array<any> = [];

  private app;
  private db;
  constructor() {

    this.app = initializeApp(firebaseConfig);
    this.db = getFirestore(this.app);
    this.leer();
    let q = query(collection(this.db, "Usuarios"),where('nombre','>=','A'));
    let unsubscribe = onSnapshot(q, (querySnapshot) => {
      this.datos = [];
      querySnapshot.forEach((doc) => {
        this.datos.push({ data: doc.data(), id: doc.id });

      });
    });

  }

  async leer() {
    const querySnapshot = await getDocs(collection(this.db, "Usuarios"));
    querySnapshot.forEach((doc) => {
      this.datos.push({ data: doc.data(), id: doc.id });
      console.log(`${doc.id} => ${doc.data()}`);
    });


  }

  async agregar() {

    try {
      const docRef = await addDoc(collection(this.db, "Usuarios"), {
        nombre: "Ezequiel",
        apellido: "Oggioni",
        matricula: 5522
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }

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