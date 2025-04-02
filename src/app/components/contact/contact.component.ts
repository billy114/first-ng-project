import {AfterContentInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  @Input() contact : any = {}
  @Output() contactCheckEvent = new EventEmitter();
  isChecked: boolean = false;

  onChange() {
    const data ={
      isChecked : this.isChecked
    }
    this.contactCheckEvent.emit(data)
  }

}
