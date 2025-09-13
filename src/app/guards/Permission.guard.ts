import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { CryptoService } from '../service/crypto.service';

export const permissionGuard: CanActivateFn = (route, state) => {
  const cryptoService = inject(CryptoService);
  const authService = inject(AuthService);
  const router = inject(Router);

  // Get required roles from route data
  const requiredRoles = route.data['roles'] as number[];

  // If no roles specified, allow access
  if (!requiredRoles || requiredRoles.length === 0) {
    return true;
  }

  // Get encrypted user data from localStorage
  const encryptedUserData = localStorage.getItem('Wamid-userData');

  // If no user data, redirect to login
  if (!encryptedUserData) {
    authService.LogOut();
    return router.createUrlTree(['/login']);
  }

  try {
    // Decrypt user data
    const userData = cryptoService.decryptData(encryptedUserData);

    // If decryption fails or no roleId, logout
    if (!userData || !userData.roleId) {
      authService.LogOut();
      return router.createUrlTree(['/login']);
    }

    // Check if user has required role
    if (requiredRoles.includes(userData.roleId)) {
      return true;
    }

    // Redirect to unauthorized if role doesn't match
    return false;

  } catch (error) {
    console.error('Error decrypting user data:', error);
    // If decryption fails, logout and redirect to login
    authService.LogOut();
    return router.createUrlTree(['/login']);
  }
};