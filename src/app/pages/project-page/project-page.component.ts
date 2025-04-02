import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-project-page',
  standalone: true,
  imports: [],
  templateUrl: './project-page.component.html',
  styleUrl: './project-page.component.scss'
})
export class ProjectPageComponent implements OnInit {
  id = 0;

  constructor(private route : ActivatedRoute) {
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    })
  }


}
