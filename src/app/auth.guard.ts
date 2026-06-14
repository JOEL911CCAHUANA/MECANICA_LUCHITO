import { inject } from '@angular/core';
import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Observable } from 'rxjs';

export const authGuard: CanActivateFn = (): Observable<boolean | UrlTree> => {
  const router = inject(Router);
  const auth = getAuth();

  return new Observable<boolean | UrlTree>((subscriber) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      subscriber.next(user ? true : router.createUrlTree(['/']));
      subscriber.complete();
    });

    return unsubscribe;
  });
};
