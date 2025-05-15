import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeadComponent } from '../app/modules/principal/components/head/head.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeadComponent],
  template: `
    <app-head />
    <router-outlet />
  `
})
export class AppComponent {
  title = 'tem_frango';
}
