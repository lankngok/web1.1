import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  test: any
  formData = new FormGroup({
    userName: new FormControl('', [Validators.required, Validators.minLength(6)]),
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
