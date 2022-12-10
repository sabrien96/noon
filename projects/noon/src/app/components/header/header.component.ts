import { Component, OnInit, ViewEncapsulation } from '@angular/core';
// import Swiper core and required modules
import SwiperCore, { Navigation, Scrollbar, A11y, Virtual } from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Scrollbar, A11y, Virtual]);
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
