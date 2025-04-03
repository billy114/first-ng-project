import {Component, OnInit} from '@angular/core';
import {FirstServiceService} from '../../core/services/first-service.service';

@Component({
  selector: 'app-b',
  standalone: true,
  imports: [],
  templateUrl: './b.component.html',
  styleUrl: './b.component.scss'
})
export class BComponent implements OnInit{
  data : string ="";
  constructor(private firstService : FirstServiceService) {}

  ngOnInit(): void {
    this.data = this.firstService.getShareData();
  }

  showData(){
    return  this.firstService.getShareData();
  }


}
