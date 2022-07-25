import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  test: any
  formData = new FormGroup({
    userName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    content: new FormControl('', [Validators.required]),
  })


  constructor() { }

  ngOnInit(): void {
  }
    onSubmit() {
      this.test = console.log(this.formData.value);
    }
  
    get f(): any {
      return this.formData.controls;
    
  }

}
