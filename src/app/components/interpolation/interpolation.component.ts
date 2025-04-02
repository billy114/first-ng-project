import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-interpolation',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './interpolation.component.html',
  styleUrl: './interpolation.component.scss'
})
export class InterpolationComponent {
//    attributs
  message : string = "Bonjour tout le monde !!"
  imageUrl : string  = "images/image.jpeg";
  condition :boolean = true;
  username : string = "david";
  prenom : string = "";

//   les fonctions
  onAlert() {
    alert("ok !!")
  }

  onKeyUp (event: KeyboardEvent) {
    console.log("user press : ", event.key);
    if (event.key === "Enter") {
      alert("enter");
    }
  }

  onMouseMove(){
    alert("mousemove");
  }

  getMessage(){
    return "Ceci est le résultat retourné par la fonction";
  }

  devinePrenom() : string {
    if (this.prenom === "Billel") { return "C'est mon prénom"; }
    else return this.prenom;
  }

}
