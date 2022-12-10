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
  user: User = { email: 'duncan@gmail.com', password: '123' };
  constructor(private authServ: AuthService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.signInform = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  save() {
    console.log(this.signInform);
    console.log('Saved: ' + JSON.stringify(this.signInform.value));
  }

  signIn() {
    this.authServ.login(this.user).subscribe((response) => {
      console.log({ response });
    });
  }
}
