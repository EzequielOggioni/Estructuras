import { CanDeactivateFn } from '@angular/router';

export const noAutorizadoGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  return true;
};


