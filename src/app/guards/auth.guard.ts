import { inject } from '@angular/core';
import { Router, type CanActivateFn } from '@angular/router';
import { AuthService } from '../service/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService); // Inject AuthService
  const router = inject(Router); // Inject Router

  const token = authService.getToken(); // Check if token exists

  if (token) {
    return true; // Allow access if token exists
  } else {
    router.navigate(['/auth']); // Redirect to login page if no token
    return false; // Deny access
  }
};
