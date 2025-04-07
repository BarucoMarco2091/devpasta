import { Injectable, inject } from '@angular/core';
import { Auth, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth = inject(Auth);
  private router = inject(Router);
  private _isLoggedIn = new BehaviorSubject<boolean>(false);
  
  isLoggedIn$ = this._isLoggedIn.asObservable();

  async login(email: string, password: string): Promise<boolean> {
    try {
      await signInWithEmailAndPassword(this.auth, email, password);
      this._isLoggedIn.next(true);
      this.router.navigate(['/admin']);
      return true;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  }

  async logout(): Promise<void> {
    await signOut(this.auth);
    this._isLoggedIn.next(false);
    this.router.navigate(['/login']);
  }
}