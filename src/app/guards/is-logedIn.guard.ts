import { inject } from '@angular/core';
import { Router, type CanActivateFn } from '@angular/router';
import { AuthService } from '../service/auth.service';

export const isLogedInGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const token = authService.getToken()
  const router = inject(Router)

  if (token) {
    router.navigate(['/home'])
    return false
  }
  return true
};
