import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as queryString from 'query-string';
import { RepositoryService } from '../../services/repository.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['../app.component.css'],
})

export class SearchComponent implements OnInit {
  title = 'app';
  page = 1;
  limit = 30;
  total = 0;
  query = {
    q: 'nodejs',
    sort: 'stars',
    order: 'desc',
    page: this.page
  };

  results: Object;

  constructor(private serviceRepo: RepositoryService) {}

  ngOnInit(): void {
    this.getResources();
  }

  async getResources() {
    this.query.page = this.page;
    this.serviceRepo.getRepositories(this.query)
      .subscribe(data => {
        this.results = data['items'];
        this.total = data['total_count'];
      });
  }

  onSearch(value: string): void {
    this.query.q = value;
    this.page = 1;
    if (value !== '') {
      this.getResources();
    }
  }

  goToPage(n: number): void {
    this.page = n;
    this.getResources();
  }

  onNext(): void {
    this.page++;
    this.getResources();
  }

  onPrev(): void {
    this.page--;
    this.getResources();
  }
}
