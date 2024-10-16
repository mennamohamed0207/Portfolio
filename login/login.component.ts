import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  login! :FormGroup;
  ngOnInit(): void {
    this.login = new FormGroup({
      username: new FormControl(null,[Validators.required]),
      Password: new FormControl(null,[Validators.required])
    })
  }
  onSumbit(){
    console.log(this.login.value)
  }

}
