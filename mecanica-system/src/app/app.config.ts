import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

import { routes } from './app.routes';

const firebaseConfig = {
  apiKey: "AIzaSyBM4VaqefoOShQDhM62GeYPhGr7cG_fMXU",
  authDomain: "mecanica-luchito-daebe.firebaseapp.com",
  projectId: "mecanica-luchito-daebe",
  storageBucket: "mecanica-luchito-daebe.firebasestorage.app",
  messagingSenderId: "814825123910",
  appId: "1:814825123910:web:9adad4d84e0749688f9a47",
  measurementId: "G-2NNYWSH3NL"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore())
  ]
};
