import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {FirstServiceService} from '../../core/services/first-service.service';

@Component({
  selector: 'app-a',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './a.component.html',
  styleUrl: './a.component.scss'
})
export class AComponent {
  data : string = "";

  constructor(private firstService : FirstServiceService) {}

  updateData() : void {
    this.firstService.setShareData(this.data);
    alert("updated successfully.");
  }
}
