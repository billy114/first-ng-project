import { Component } from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgClass
  ],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.scss'
})
export class ReactiveFormsComponent {
  name: FormControl = new FormControl('', [Validators.required]);
  email: FormControl = new FormControl('', [Validators.required, Validators.email]);

  password: FormControl = new FormControl('', [
    Validators.required,
    Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[\\W_]).{8,}$")
  ]);
  confPassword: FormControl = new FormControl('', [Validators.required]);



  getNameValue(){
    return this.name.value;
  }

  isMatched() : boolean{
    return this.password.value === this.confPassword.value;
  }
}
