import { User } from './../../../../../../shared/models/user.model';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../../../shared/services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss'],
})
export class MainHeaderComponent implements OnInit {
  signInform: FormGroup;
  signUnform: FormGroup;
  user: User = { email: 'duncan@gmail.com', password: '123' };
  display: boolean;
  constructor(private authServ: AuthService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.display = true;
    this.signUnform = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
    });
    this.signInform = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  changeForm() {
    this.display = !this.display;
  }
  save() {
    console.log(this.signInform);
    console.log('Saved: ' + JSON.stringify(this.signInform.value));
  }

  signIn() {
    let user:User={
      email:this.signInform.controls['email'].value,
      password:this.signInform.controls['password'].value,
    }
    this.authServ.login(user).subscribe((response) => {
      console.log({ response });
    });
  }
}
