import { Component } from '@angular/core';
import {HeaderComponent} from "../../admin/components/header/header.component";
import {FooterComponent} from "../../admin/components/footer/footer.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    RouterOutlet
  ],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.scss'
})
export class AdminLayoutComponent {

}
