import { Component, OnInit } from '@angular/core';
import { ClimaService } from 'src/app/services/clima.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html'
})
export class AppBadgeComponent implements OnInit {
  clima$!: Observable<any>;

  constructor(private climaService: ClimaService) { }

  ngOnInit(): void {
  }

  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  fetchClima(): void {
    this.clima$ = this.climaService.getClima();
  }

}
