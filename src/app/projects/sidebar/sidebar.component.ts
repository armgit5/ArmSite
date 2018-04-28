import { Component, OnInit } from '@angular/core';
import { SidebarService } from './sidebar.service';

@Component({
    moduleId: module.id,
    // tslint:disable-next-line:component-selector
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
    styleUrls: ['../projects.component.css',
                '../demo.css',
                '../light-bootstrap-dashboard.css',
                './sidebar.component.css']
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    isCollapsed = true;
    width = '0%';

    constructor(private sidebarService: SidebarService) {}
    ngOnInit() {
      this.sidebarService.widthUpdate.subscribe(
        width => {
          console.log(width);
          this.width = width;
        }
      );
    }

    linkSelected() {
      this.sidebarService.toggleSidebar(true);
      this.sidebarService.emitTrue();
    }
}
