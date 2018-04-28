import { Component, OnInit } from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';

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
    constructor(location: Location) {
        this.location = location;
    }
    // tslint:disable-next-line:one-line
    ngOnInit(){

    }

}
