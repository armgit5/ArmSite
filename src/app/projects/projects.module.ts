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

@NgModule({

  declarations: [
    ProjectsComponent,
    SidebarComponent,
    NavbarComponent,
    ProductsComponent,
    DeepLearningComponent,
    EsgnComponent,
    IonicComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ProjectsRoutingModule
  ]

})

export class ProjectsModule {

}
