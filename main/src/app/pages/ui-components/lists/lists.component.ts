import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MoviesService } from 'src/app/services/movies.service'; 

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
})

export class AppListsComponent {
  title: String = '';
  movie$!: Observable<any>;

  constructor(private moviesService: MoviesService) {}

  onSubmit(): void {
    this.movie$ = this.moviesService.getMovie(this.title);
  }
}
