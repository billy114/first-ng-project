import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
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
  formTest : FormGroup = new FormGroup({
    name : new FormControl('', [Validators.required]),
    email : new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('',  [
      Validators.required,
      Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[\\W_]).{8,}$")
    ]),
    confPassword: new FormControl('', [Validators.required]),
    languages : new FormArray<FormControl<string | null>>([
      new FormControl('', Validators.required)
    ])
  })

  submit : boolean = false;

  get name() : FormControl {
    return this.formTest.controls['name'] as FormControl;
  }

  get languages() : FormArray<FormControl<string | null>>{
    return this.formTest.controls['languages'] as FormArray<FormControl<string | null>>;
  }

  get email() : FormControl {
    return this.formTest.controls['email'] as FormControl;
  }

  get password() : FormControl {
    return this.formTest.controls['password'] as FormControl;
  }

  get confPassword() : FormControl {
    return this.formTest.controls['confPassword'] as FormControl;
  }

  isMatched() : boolean{
    return this.password.value === this.confPassword.value;
  }

  addLanguageInput() : void{
    this.languages.push(new FormControl('', Validators.required));
  }

  removeLanguageInput(index : number){
    this.languages.removeAt(index);
  }

  onSubmit(){
    if (this.formTest.invalid) {
      this.submit = true;
    }
    else {
      console.log(this.formTest.value);
    }
  }
}
