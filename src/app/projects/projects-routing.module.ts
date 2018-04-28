import { NgModule } from '@angular/core';
import { Routes } from '@angular/router/router';
import { RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects.component';
import { ProductsComponent } from './products/products.component';
import { DeepLearningComponent } from './deep-learning/deep-learning.component';
import { EsgnComponent } from './esgn/esgn.component';
import { IonicComponent } from './ionic/ionic.component';
import { PcbComponent } from './pcb/pcb.component';
import { GoogleAppComponent } from './google-app/google-app.component';

const adminRoutes: Routes = [
  { path: '', component: ProjectsComponent, children: [
    {
      path: 'deep-learning',
      component: DeepLearningComponent
    },
    {
      path: 'esgn',
      component: EsgnComponent
    },
    {
      path: 'ionic',
      component: IonicComponent
    },
    {
      path: 'pcb',
      component: PcbComponent
    },
    {
      path: 'google-app',
      component: GoogleAppComponent
    }
  ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [RouterModule]
})
export class ProjectsRoutingModule {

}
