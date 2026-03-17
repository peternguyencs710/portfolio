import { CanActivateFn } from '@angular/router';

export const pageGuardGuard: CanActivateFn = (route, state) => {
  return true;
};
