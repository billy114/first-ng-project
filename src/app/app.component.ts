import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ExempleComponent} from './components/exemple/exemple.component';
import {AutreExempleComponent} from './components/autre-exemple/autre-exemple.component';
import {InterpolationComponent} from './components/interpolation/interpolation.component';
import {ExercicesComponent} from './components/exercices/exercices.component';
import {DirectivesPipesComponent} from './components/directives-pipes/directives-pipes.component';
import {ProjectsComponent} from './pages/projects/projects.component';
import {ParentComponent} from './components/parent/parent.component';
import {ContactComponent} from './components/contact/contact.component';
import {ContactsComponent} from './pages/contacts/contacts.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ExempleComponent, AutreExempleComponent, InterpolationComponent, ExercicesComponent, DirectivesPipesComponent, ProjectsComponent, ParentComponent, ContactComponent, ContactsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'first-ng-project';
}
