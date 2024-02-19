import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AsideComponent} from './components/layout/aside/aside.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { MainComponent } from './components/pages/main/main.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AsideComponent,MainComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'employees';
}
