import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-exercices',
  standalone: true,
    imports: [
        FormsModule
    ],
  templateUrl: './exercices.component.html',
  styleUrl: './exercices.component.scss'
})
export class ExercicesComponent {
  nameInput : string = "";
  ageInput : string = "";
  name : String = "";
  age : String = "";


  isFormValid() : boolean {
    return this.nameInput !== "" && this.ageInput !== "";
  }

  onSubmit() {
    alert("Mise à jour réussie !!")
    this.name = this.nameInput;
    this.nameInput = "";
    this.age = this.ageInput;
    this.ageInput = "";
  }
}
