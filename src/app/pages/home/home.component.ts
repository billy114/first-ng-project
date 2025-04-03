import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {FirstServiceService} from '../../core/services/first-service.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(
    private router: Router,
    private firstService : FirstServiceService
  ) {}
  
  navigateTo(path : string){
    setTimeout(()=>{
      this.router.navigate([path]);
    },1000)

  }




}
