import { Component } from '@angular/core';
import {ProjectComponent} from '../../components/project/project.component';
import {RouterLink} from '@angular/router';
import {ProjectService} from '../../core/services/project.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    ProjectComponent,
    RouterLink
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  status : string = "All";
  projectData = [
    {
      id: 1,
      text: 'New admin Design',
      subtext: 'It will be as simple as Occidental',
      status: 'Completed',
      date: new Date('2024-10-15T10:00:00'),
      cost: 3500,
      team: [
        { firstName: 'Alice', lastName: 'Dubois' },
        { firstName: 'Marc', lastName: 'Lemoine' }
      ]
    },
    {
      id: 2,
      text: 'Brand logo design',
      subtext: 'To achieve it would be necessary',
      status: 'Pending',
      date: new Date('2024-10-22T14:30:00'),
      cost: 1200,
      team: [
        { firstName: 'Claire', lastName: 'Fontaine' },
        { firstName: 'Paul', lastName: 'Morel' }
      ]
    },
    {
      id: 3,
      text: 'New Landing Design',
      subtext: 'For science, music, sport, etc',
      status: 'Delay',
      date: new Date('2024-10-13T09:15:00'),
      cost: 4100,
      team: [
        { firstName: 'Nina', lastName: 'Berger' },
        { firstName: 'Julien', lastName: 'Giraud' }
      ]
    },
    {
      id: 4,
      text: 'Redesign - Landing page',
      subtext: 'If several languages coalesce',
      status: 'Completed',
      date: new Date('2024-10-14T11:45:00'),
      cost: 2900,
      team: [
        { firstName: 'Sophie', lastName: 'Renard' },
        { firstName: 'Lucas', lastName: 'Martin' }
      ]
    },
    {
      id: 5,
      text: 'Skote Dashboard UI',
      subtext: 'Separate existence is a myth',
      status: 'Completed',
      date: new Date('2024-10-13T16:00:00'),
      cost: 5000,
      team: [
        { firstName: 'Eva', lastName: 'Blanc' },
        { firstName: 'Tom', lastName: 'Roux' }
      ]
    },
    {
      id: 6,
      text: 'Blog Template UI',
      subtext: 'For science, music, sport, etc',
      status: 'Pending',
      date: new Date('2024-10-24T13:20:00'),
      cost: 2200,
      team: [
        { firstName: 'Manon', lastName: 'Petit' },
        { firstName: 'Yanis', lastName: 'Perrot' }
      ]
    },
    {
      id: 7,
      text: 'Multipurpose Landing',
      subtext: 'It will be as simple as Occidental',
      status: 'Delay',
      date: new Date('2024-10-15T17:30:00'),
      cost: 4600,
      team: [
        { firstName: 'Emma', lastName: 'Noir' },
        { firstName: 'Antoine', lastName: 'Leroux' }
      ]
    },
    {
      id: 8,
      text: 'App Landing UI',
      subtext: 'For science, music, sport, etc',
      status: 'Completed',
      date: new Date('2024-10-11T08:50:00'),
      cost: 3200,
      team: [
        { firstName: 'Léa', lastName: 'Baron' },
        { firstName: 'Hugo', lastName: 'Vidal' }
      ]
    },
    {
      id: 9,
      text: 'New admin Design',
      subtext: 'Their most common words.',
      status: 'Completed',
      date: new Date('2024-10-12T10:10:00'),
      cost: 3700,
      team: [
        { firstName: 'Camille', lastName: 'Garnier' },
        { firstName: 'Théo', lastName: 'Marchand' }
      ]
    }
  ];

  constructor(private projectService: ProjectService) { }

  changeStatus(status :string) : void {
    this.status = status;
  }

  getCompletedProjectsCount() : number {
    return this.projectService.countCompletedProjects(this.projectData)
  }

}
