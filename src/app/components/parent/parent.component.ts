import { Component } from '@angular/core';
import {EnfantComponent} from '../enfant/enfant.component';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [
    EnfantComponent,
    FormsModule
  ],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {
  messageFromParent : string = "";

  name : string = "";
  age : number = 0;

  update (event : any) {
    this.name = event.name;
    this.age = event.age;
  }
}
