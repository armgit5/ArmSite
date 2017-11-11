import { NgModule } from '@angular/core';

import { NavbarComponent } from './shared/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { AdminRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { DeepLearningComponent } from './deep-learning/deep-learning.component';

@NgModule({

  declarations: [
    ProjectsComponent,
    SidebarComponent,
    NavbarComponent,
    ProductsComponent,
    DeepLearningComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AdminRoutingModule
  ]

})

export class ProjectsModule {

}
