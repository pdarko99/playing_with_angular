import 'zone.js/dist/zone';
import { Component, importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, RouterOutlet, Routes } from '@angular/router';
import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import { HttpInterceptorModule, HttpRequestInterceptor } from './home/http.interceptor';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <h1>Hello from {{name}}!</h1>
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular 
    </a>

    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  name = 'Angular';
}

const appRoutes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/routes').then((mod) => mod.admin_routes),
  },
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes),
    provideHttpClient(), 
    {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpRequestInterceptor,
    multi: true,
  }

]
    
});
