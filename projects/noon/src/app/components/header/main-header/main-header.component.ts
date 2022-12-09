import { User } from './../../../../../../shared/models/user.model';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../../../shared/services/auth.service';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {
  user: User = { email: 'duncan@gmail.com', password: '123' }
  constructor(private authServ: AuthService) { }

  ngOnInit(): void {
  }
  signIn() {
    this.authServ.login(this.user).subscribe((response) => {
      console.log({ response });

    })
  }
}
