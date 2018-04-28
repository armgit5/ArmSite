import { Component, OnInit, ElementRef } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { SidebarService } from '../../sidebar/sidebar.service';

@Component({
  moduleId: module.id,
  // tslint:disable-next-line:component-selector
  selector: 'navbar-cmp',
  templateUrl: 'navbar.component.html',
  styleUrls: ['../../projects.component.css',
    '../../animate.min.css',
    '../../demo.css',
    '../../light-bootstrap-dashboard.css',
    './navbar.component.css']
})

export class NavbarComponent implements OnInit {
  private listTitles: any[];
  location: Location;
  private toggleButton: any;
  private sidebarVisible: boolean;
  width = '0%';

  constructor(location: Location, private element: ElementRef, private sidebarService: SidebarService) {
    const navbar: HTMLElement = this.element.nativeElement;
    this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
  }
  ngOnInit() {
    const navbar: HTMLElement = this.element.nativeElement;
    this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];

    this.sidebarService.sidebarVisibleUpdate.subscribe(
      status => {
        this.sidebarVisible = status;
      }
    );
  }

  sidebarOpen() {
    const toggleButton = this.toggleButton;
    const body = document.getElementsByTagName('body')[0];
    setTimeout(function () {
      toggleButton.classList.add('toggled');
    }, 500);
    body.classList.add('nav-open');

    this.sidebarVisible = true;
  }
  sidebarClose() {
    const body = document.getElementsByTagName('body')[0];
    this.toggleButton.classList.remove('toggled');
    this.sidebarVisible = false;
    body.classList.remove('nav-open');
  }
  sidebarToggle() {
    // const toggleButton = this.toggleButton;
    // const body = document.getElementsByTagName('body')[0];
    if (this.sidebarVisible === false) {
      this.sidebarOpen();
      this.sidebarService.toggleSidebar(true);
    } else {
      this.sidebarClose();
      this.sidebarService.toggleSidebar(false);
    }
  }

}
