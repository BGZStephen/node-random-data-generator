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

}

export let navbarVisible : boolean = true;
