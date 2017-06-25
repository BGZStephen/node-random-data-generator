import { Component, OnInit, Injectable } from '@angular/core';

@Component({
  selector: 'app-dashboard-notification-bar',
  templateUrl: './dashboard-notification-bar.component.html',
  styleUrls: ['./dashboard-notification-bar.component.scss']
})
export class DashboardNotificationBarComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  toggleNavbarVisible() {
    navbarVisible = !navbarVisible
    console.log(navbarVisible)
  }

  setNavbarResize() {
    if(screen.width >= 768) {
      navbarVisible = true;
    }
  }

}

export let navbarVisible : boolean = true;
