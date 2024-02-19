import { Component } from '@angular/core';
import { AppComponent } from '../../../app.component';
import { AsideComponent } from '../../layout/aside/aside.component';
import { FooterComponent } from '../../layout/footer/footer.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
