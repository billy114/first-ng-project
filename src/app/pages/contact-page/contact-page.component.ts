import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss'
})
export class ContactPageComponent implements OnInit {
  name: string = "";

  constructor(private route : ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.name = params['name'];
    })
  }
}
