import {Routes} from '@angular/router';
import {Home} from './shared/presentation/views/home/home';

const about = () => import('./shared/presentation/views/about/about').then(m => m.About);
const pageNotFound = () => import('./shared/presentation/views/page-not-found/page-not-found').then(m => m.PageNotFound);
const learningRoutes = () => import('./learning/presentation/learning.routes').then(m => m.learningRoutes);
const iamRoutes = () => import('./iam/presentation/iam.routes').then(m => m.iamRoutes);

const baseTitle = 'ACME Learning Center';

/**
 * Main routes configuration for the application in the presentation layer.
 */
export const routes: Routes = [
  { path: 'home',     component:      Home,                         title: `${baseTitle} - Home`  },
  { path: 'about',    loadComponent:  about,                        title: `${baseTitle} - About`  },
  { path: 'learning', loadChildren:  learningRoutes},
  { path: 'iam',      loadChildren:   iamRoutes },
  { path: '',         redirectTo:     '/home', pathMatch: 'full'  },
  { path: '**',       loadComponent:  pageNotFound,                 title: `${baseTitle} - Page Not Found`  },
];
