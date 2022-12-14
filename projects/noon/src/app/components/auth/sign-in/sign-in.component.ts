import { AuthService } from './../../../../../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(private authServ: AuthService) { }

  ngOnInit(): void {
  }
login(){
  this.authServ.login()
}
}
