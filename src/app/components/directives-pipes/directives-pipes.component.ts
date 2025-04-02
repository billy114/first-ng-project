import { Component } from '@angular/core';
import {identity} from 'rxjs';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-directives-pipes',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './directives-pipes.component.html',
  styleUrl: './directives-pipes.component.scss'
})
export class DirectivesPipesComponent {
  villes = ["Paris", "London", "NY", "LA", "Marseille"];
  protected readonly identity = identity;
  taches = [
    {
      name : "project angular",
      status : "pending"
    },
    {
      name : "project java",
      status : "finished"
    },
    {
      name : "project php",
      status : "finished"
    },
    {
      name : "project canva",
      status : "pending"
    }
  ]

  view = 'home';
  changeView(view: string) :void {
    this.view = view;
  }
}
