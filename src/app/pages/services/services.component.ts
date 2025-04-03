import { Component } from '@angular/core';
import {FirstServiceService} from '../../core/services/first-service.service';
import {AComponent} from '../../components/a/a.component';
import {BComponent} from '../../components/b/b.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    AComponent,
    BComponent
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  constructor(private firstService : FirstServiceService) {}

  onClick(){
    this.firstService.logger(
      "coucou"
    )
  }
}
