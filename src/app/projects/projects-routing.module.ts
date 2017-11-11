import { NgModule } from '@angular/core';
import { Routes } from '@angular/router/router';
import { RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects.component';
import { ProductsComponent } from './products/products.component';
import { DeepLearningComponent } from './deep-learning/deep-learning.component';

const adminRoutes: Routes = [
  { path: '', component: ProjectsComponent, children: [
    {
      path: 'product',
      component: ProductsComponent
    },
    {
      path: 'deep-learning',
      component: DeepLearningComponent
    }
  ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule {

}
