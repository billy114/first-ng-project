import { Component } from '@angular/core';
import {ContactComponent} from '../../components/contact/contact.component';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [
    ContactComponent
  ],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent {
  contactSelectionnesCpt = 0;
  contactData = [
    {
      id: 1,
      name: 'David McHenry',
      designation: 'UI/UX Designer',
      projects: ['Photoshop', 'illustrator'],
      email: 'david@skote.com'
    },
    {
      id: 2,
      name: 'Frank Kirk',
      designation: 'Frontend Developer',
      projects: ['Html', 'Css', '2 + more'],
      email: 'frank@skote.com'
    },
    {
      id: 3,
      name: 'Rafael Morales',
      designation: 'Backend Developer',
      projects: ['Php', 'Java', 'Python'],
      email: 'Rafael@skote.com'
    },
    {
      id: 4,
      name: 'Mark Ellison',
      designation: 'Full Stack Developer',
      projects: ['Ruby', 'Php', '2 + more'],
      email: 'mark@skote.com'
    },
    {
      id: 5,
      name: 'Minnie Walter',
      designation: 'Frontend Developer',
      projects: ['Html', 'Css', '2 + more'],
      email: 'minnie@skote.com'
    },
    {
      id: 6,
      name: 'Shirley Smith',
      designation: 'UI/UX Designer',
      projects: ['Photoshop', 'illustrator'],
      email: 'shirley@skote.com'
    },
    {
      id: 7,
      name: 'John Santiago',
      designation: 'Full Stack Developer',
      projects: ['Ruby', 'Php', '2 + more'],
      email: 'john@skote.com'
    },
    {
      id: 8,
      name: 'Colin Melton',
      designation: 'Backend Developer',
      projects: ['Php', 'Java', 'Python'],
      email: 'colin@skote.com'
    },
  ];

  updateCpt(data : any){
    if (data.isChecked){
      this.contactSelectionnesCpt ++
    } else {
      this.contactSelectionnesCpt --;
    }
  }
}
