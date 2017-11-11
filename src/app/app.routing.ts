
import { ProjectsComponent } from './projects/projects.component';
import { WrapperComponent } from './wrapper/wrapper.component';
export const routeConfig = [
  { path: '', component: WrapperComponent},
  { path: 'projects', loadChildren: './projects/projects.module#ProjectsModule'}
];

export const navigatableComponents = [
];
