import { NgModule } from '@angular/core';

import { NavbarComponent } from './shared/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProjectsComponent } from './projects.component';
import { DeepLearningComponent } from './deep-learning/deep-learning.component';
import { EsgnComponent } from './esgn/esgn.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { IonicComponent } from './ionic/ionic.component';
import { PcbComponent } from './pcb/pcb.component';
import { GoogleAppComponent } from './google-app/google-app.component';
import { WaterPumpComponent } from './waterpump-iot/waterpump-iot.component';
import { SidebarService } from './sidebar/sidebar.service';

@NgModule({

  declarations: [
    ProjectsComponent,
    SidebarComponent,
    NavbarComponent,
    ProductsComponent,
    DeepLearningComponent,
    EsgnComponent,
    IonicComponent,
    PcbComponent,
    GoogleAppComponent,
    WaterPumpComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ProjectsRoutingModule
  ],
  providers: [
    SidebarService
  ]
})

export class ProjectsModule {

}
