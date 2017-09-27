import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ROUTES } from './routes';
import { AppNotFoundComponent } from './error/app.notfound';
import { AppPaginationComponent } from './pagination/app.pagination';
import { RepositoryService } from '../services/repository.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    AppNotFoundComponent,
    AppPaginationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(
      ROUTES,
      { enableTracing: true }
    )
  ],
  providers: [
    RepositoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
