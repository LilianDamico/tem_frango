import { provideRouter, withHashLocation } from '@angular/router';
import { routes } from './app.routes';

export const appConfig = [
  provideRouter(routes, withHashLocation())
];
