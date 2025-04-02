import { Component, Input } from '@angular/core';
import {CurrencyPipe, DatePipe, NgClass} from '@angular/common';
import {identity} from 'rxjs';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [
    DatePipe,
    CurrencyPipe,
    NgClass,
    RouterLink
  ],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  @Input() project : any ;
  protected readonly identity = identity;

}
