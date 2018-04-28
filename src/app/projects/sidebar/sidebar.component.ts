import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    // tslint:disable-next-line:component-selector
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
    styleUrls: ['../projects.component.css',
                '../animate.min.css',
                '../demo.css',
                '../light-bootstrap-dashboard.css',
                './sidebar.component.css']
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    isCollapsed = true;

    constructor() {}
    ngOnInit() {

    }
}
