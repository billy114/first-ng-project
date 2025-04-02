import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-enfant',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './enfant.component.html',
  styleUrl: './enfant.component.scss'
})
export class EnfantComponent {
  @Input() message : string = "valeur par default";
  @Output() emitter = new EventEmitter();

  name = "";
  age : number = 0;

  valider (){
    const data = {
      name : this.name,
      age : this.age
    }
    this.emitter.emit(data);
  }
}
