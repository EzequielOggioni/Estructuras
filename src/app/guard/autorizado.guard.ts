import { CanActivateFn, CanDeactivateFn } from '@angular/router';

export const autorizadoGuard: CanActivateFn = (route, state) => {
  return JSON.parse(localStorage.getItem('usuario')??"{}").email == 'egos27@gmail.com';
};
export const noAutorizadoGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  return localStorage.getItem('usuario') != "";
};


