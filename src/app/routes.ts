import { Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { AppNotFoundComponent } from './error/app.notfound';

export const ROUTES: Routes = [
  {
    path: '',
    component: SearchComponent
  },
  {
    path: '**',
    component: AppNotFoundComponent
  }
];
