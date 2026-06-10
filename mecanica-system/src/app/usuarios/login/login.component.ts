  import { Component } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { FormsModule } from '@angular/forms';
  import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
  import { Router } from '@angular/router';
  
  @Component({
    selector: 'app-login',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
  })
  export class LoginComponent {
    constructor(private router: Router) {}

    isLogin = true;
    loading = false;
    errorMessage = '';
    successMessage = '';
    email = '';
    password = '';
    name = '';

    toggleForm(): void {
      this.isLogin = !this.isLogin;
      this.clearMessages();
    }

    async submit(): Promise<void> {
      this.clearMessages();
      this.loading = true;
      const auth = getAuth();

      try {
        if (this.isLogin) {
          await signInWithEmailAndPassword(auth, this.email, this.password);
          this.router.navigate(['/clientes']);
        } else {
          const userCredential = await createUserWithEmailAndPassword(auth, this.email, this.password);
          if (this.name.trim()) {
            await updateProfile(userCredential.user, { displayName: this.name.trim() });
          }
          this.successMessage = 'Cuenta creada correctamente';
          this.router.navigate(['/clientes']);
        }
      } catch (error) {
        this.errorMessage = this.mapFirebaseError(error);
      } finally {
        this.loading = false;
      }
    }

    private clearMessages(): void {
      this.errorMessage = '';
      this.successMessage = '';
    }

    private mapFirebaseError(error: unknown): string {
      const firebaseError = error as { code?: string; message?: string };

      if (firebaseError?.code) {
        switch (firebaseError.code) {
          case 'auth/invalid-email':
            return 'El correo no es válido.';
          case 'auth/user-not-found':
            return 'Usuario no encontrado.';
          case 'auth/wrong-password':
            return 'Contraseña incorrecta.';
          case 'auth/email-already-in-use':
            return 'El correo ya está en uso.';
          case 'auth/weak-password':
            return 'La contraseña es demasiado débil.';
          default:
            return firebaseError.message ?? 'Ocurrió un error con Firebase.';
        }
      }

      return 'Ocurrió un error. Intenta de nuevo.';
    }
  }
