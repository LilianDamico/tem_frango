import { Component } from '@angular/core';
import { HeadComponent } from '../../components/head/head.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { LandingPageComponent } from '../../components/landing-page/landing-page.component';

@Component({
  selector: 'app-home',
  imports: [
    HeadComponent,
    FooterComponent,
    LandingPageComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
